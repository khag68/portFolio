import { Reveal } from '@/components/portfolio/reveal'

type SectionHeadingProps = {
  index: string
  title: string
  subtitle?: string
}

/** Consistent numbered section header used across the page. */
export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-primary">{index}</span>
        <span className="h-px w-12 bg-border" aria-hidden="true" />
      </div>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  )
}
