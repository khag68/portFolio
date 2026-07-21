'use client'

import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Mail, Send } from 'lucide-react'
import { toast } from 'sonner'
import { sendContactMessage } from '@/app/actions/contact'
import { Reveal } from '@/components/portfolio/reveal'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { createContactSchema, type ContactInput } from '@/lib/contact-schema'
import { useI18n } from '@/lib/i18n/context'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  const { t } = useI18n()

  // Rebuild the schema when the language changes so error messages are localized.
  const schema = useMemo(
    () => createContactSchema(t.contact.validation),
    [t.contact.validation],
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '', company: '' },
  })

  async function onSubmit(values: ContactInput) {
    const result = await sendContactMessage(values)
    if (result.success) {
      toast.success(t.contact.successTitle, { description: t.contact.successBody })
      reset()
    } else {
      toast.error(t.contact.errorTitle, { description: t.contact.errorBody })
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        index="05"
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            {t.contact.orEmail}:
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4" aria-hidden="true" />
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            {/* Honeypot — hidden from real users, catches bots. */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                tabIndex={-1}
                autoComplete="off"
                {...register('company')}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label={t.contact.name}
                error={errors.name?.message}
              >
                <Input
                  id="name"
                  placeholder={t.contact.namePlaceholder}
                  aria-invalid={!!errors.name}
                  {...register('name')}
                />
              </Field>

              <Field
                id="email"
                label={t.contact.email}
                error={errors.email?.message}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  aria-invalid={!!errors.email}
                  {...register('email')}
                />
              </Field>
            </div>

            <Field
              id="message"
              label={t.contact.message}
              error={errors.message?.message}
            >
              <Textarea
                id="message"
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                aria-invalid={!!errors.message}
                className="resize-none"
                {...register('message')}
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="gap-2 rounded-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  {t.contact.sending}
                </>
              ) : (
                <>
                  <Send className="size-4" aria-hidden="true" />
                  {t.contact.send}
                </>
              )}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
