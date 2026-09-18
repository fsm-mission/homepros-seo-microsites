import { Section, SectionHeading } from '@repo/shared/components/section'

const standardItems = [
  'where the underlying data came from',
  'the geographic area represented',
  'the date range',
  'how the figure was calculated',
  'the number of observations when available',
  'limitations in the data',
  'whether the statistic represents York City, York County, a ZIP code, or another geography',
]

const explainsItems = [
  'what EPA radon maps can and cannot tell you',
  'how Pennsylvania radon data can be used',
  'why York City and York County must be treated as different geographies',
  'how local statistics are selected and verified',
  'why some frequently repeated York statistics are not presented as verified facts',
  'what sample size, date range, geography, and other data limitations can mean',
]

export function YorkData() {
  return (
    <Section id="york-data" tone="default">
      <SectionHeading
        eyebrow="Data integrity"
        title="What Do We Actually Know About Radon Levels in York?"
        intro="Radon is an important issue in Pennsylvania, and authoritative sources establish regional radon potential."
      />

      <div className="mt-6 flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-site-muted-fg">
        <p>
          But there is an important difference between knowing that radon is a regional concern and
          claiming that a specific percentage of York homes test above a particular level.
        </p>
        <p>
          You may encounter precise York-area statistics on contractor websites, directories,
          AI-generated search results, or other pages. We do not automatically repeat those numbers.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-site-border bg-site-surface p-6 sm:p-8">
        <h3 className="font-display text-xl font-semibold text-site-fg">
          Our Standard for Local Radon Statistics
        </h3>
        <p className="mt-3 text-base leading-relaxed text-site-muted-fg">
          When York Radon Help publishes a local statistic, we want to be able to show:
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {standardItems.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-site-fg">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-site-primary" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-base leading-relaxed text-site-fg">
          Until a figure can be traced and reproduced from appropriate source data, we won&rsquo;t
          present it as a verified York statistic.
        </p>
      </div>

      <div className="mt-8 max-w-3xl">
        <h3 className="font-display text-xl font-semibold text-site-fg">
          Understanding York Radon Data
        </h3>
        <p className="mt-3 text-base leading-relaxed text-site-muted-fg">
          Our York radon levels resource is designed to help homeowners interpret local radon
          information more carefully.
        </p>
        <p className="mt-4 text-base leading-relaxed text-site-muted-fg">It explains:</p>
        <ul className="mt-4 flex flex-col gap-3">
          {explainsItems.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-site-fg">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-site-accent" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-base leading-relaxed text-site-muted-fg">
          That context matters because a local average describes a dataset or group of results
          &mdash; not the concentration inside a particular property.
        </p>
        <p className="mt-4 text-base leading-relaxed text-site-muted-fg">
          As additional reproducible data becomes available, the resource can be expanded with
          further York-area analysis while retaining the same sourcing and methodology standards.
        </p>
        <p className="mt-6 font-mono text-sm text-site-primary">
          Explore York radon levels and methodology · See our Sources &amp; Methodology
        </p>
      </div>
    </Section>
  )
}
