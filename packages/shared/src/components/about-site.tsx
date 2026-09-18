import { Section, SectionHeading } from './section'

export function AboutSite({
  title = 'About This Website',
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <Section id="about" tone="default">
      <div className="max-w-3xl">
        <SectionHeading eyebrow="Transparency" title={title} />
        <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-site-muted-fg">
          {children}
        </div>
      </div>
    </Section>
  )
}
