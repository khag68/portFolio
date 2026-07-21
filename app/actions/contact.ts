'use server'

import { Resend } from 'resend'
import { createContactSchema, type ContactInput } from '@/lib/contact-schema'
import { profile } from '@/lib/portfolio-data'

export type ContactResult = {
  success: boolean
  /** Coarse error category — UI maps this to a localized message. */
  error?: 'validation' | 'config' | 'send'
}

/**
 * Server Action that validates input and sends the message via Resend.
 *
 * Security notes:
 *  - Runs only on the server; the RESEND_API_KEY never reaches the client.
 *  - Re-validates with the same zod schema regardless of client validation.
 *  - Uses a honeypot field to silently drop obvious bot submissions.
 *  - Sets replyTo to the visitor's address so you can reply directly.
 */
export async function sendContactMessage(
  input: ContactInput,
): Promise<ContactResult> {
  const parsed = createContactSchema().safeParse(input)
  if (!parsed.success) {
    return { success: false, error: 'validation' }
  }

  const { name, email, message, company } = parsed.data

  // Honeypot tripped — pretend success so bots don't learn anything.
  if (company && company.length > 0) {
    return { success: true }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error(
      '[v0] RESEND_API_KEY is not set. Add it in Project Settings → Vars to enable the contact form.',
    )
    return { success: false, error: 'config' }
  }

  const resend = new Resend(apiKey)
  const to = process.env.CONTACT_TO_EMAIL ?? profile.email
  // Until you verify your own domain in Resend, the shared onboarding sender works.
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>'

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.6;">
          <h2 style="margin:0 0 12px;">New portfolio message</h2>
          <p style="margin:0;"><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;" />
          <p style="white-space:pre-wrap;margin:0;">${escapeHtml(message)}</p>
        </div>
      `,
    })

    if (error) {
      console.error('[v0] Resend send error:', error)
      return { success: false, error: 'send' }
    }

    return { success: true }
  } catch (err) {
    console.error('[v0] Unexpected error sending email:', err)
    return { success: false, error: 'send' }
  }
}

/** Minimal HTML escaping for the email body. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
