import { Section, SectionHeading } from './section'

export type Step = { title: string; body: string }

export function HowItWorks({
  eyebrow = 'How it works',
  title,
  intro,
  steps,
}: {
  eyebrow?: string
  title: string
  intro: string
  steps: Step[]
}) {
  return (
    <Section id="how-it-works" tone="muted">
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} tone="muted" />
      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="flex flex-col gap-3 rounded-lg border border-site-border bg-site-surface p-6"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-site-primary font-mono text-sm font-semibold text-site-primary-fg">
              {i + 1}
            </span>
            <h3 className="font-display text-lg font-semibold text-site-fg">{step.title}</h3>
            <p className="text-sm leading-relaxed text-site-muted-fg">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
