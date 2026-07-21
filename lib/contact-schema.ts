import { z } from 'zod'

/**
 * Shared contact-form schema, used on BOTH the client (for live validation
 * with localized messages) and the server (as the security boundary —
 * never trust client input). The factory lets us inject translated messages.
 */

export type ContactMessages = {
  nameMin: string
  emailInvalid: string
  messageMin: string
  messageMax: string
}

export const defaultContactMessages: ContactMessages = {
  nameMin: 'Please enter your name (at least 2 characters).',
  emailInvalid: 'Please enter a valid email address.',
  messageMin: 'Your message should be at least 10 characters.',
  messageMax: 'Your message is too long (1000 characters max).',
}

export function createContactSchema(messages: ContactMessages = defaultContactMessages) {
  return z.object({
    name: z.string().trim().min(2, messages.nameMin).max(80),
    email: z.email(messages.emailInvalid).max(160),
    message: z
      .string()
      .trim()
      .min(10, messages.messageMin)
      .max(1000, messages.messageMax),
    // Honeypot: real users never see/fill this. Bots usually do.
    company: z.string().max(0).optional(),
  })
}

export type ContactInput = z.infer<ReturnType<typeof createContactSchema>>
