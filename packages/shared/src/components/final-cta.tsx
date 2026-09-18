import { Section } from './section'
import { SiteButton } from './site-button'

export function FinalCta({
  title,
  body,
  cta,
  footnote,
}: {
  title: string
  body: string
  cta: string
  footnote: string
}) {
  return (
    <Section tone="surface" className="text-center">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg leading-relaxed text-site-muted-fg">{body}</p>
        <SiteButton href="#request" variant="primary">
          {cta}
        </SiteButton>
        <p className="text-sm text-site-muted-fg">{footnote}</p>
      </div>
    </Section>
  )
}
