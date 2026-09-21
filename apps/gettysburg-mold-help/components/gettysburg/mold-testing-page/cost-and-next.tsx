import { Section, SectionHeading } from '@repo/shared/components/section'
import { ContextualLink, NeutralList, Prose } from './primitives'

const COST_FACTORS = [
  {
    factor: 'Number of samples',
    why: 'Additional samples may add collection and laboratory work',
  },
  {
    factor: 'Type of sampling',
    why: 'Air and surface sampling involve different collection methods and purposes',
  },
  {
    factor: 'Laboratory analysis',
    why: 'Laboratory services may be included or charged separately depending on the provider',
  },
  {
    factor: 'Property size and complexity',
    why: 'Larger or more complicated properties may require more evaluation time',
  },
  {
    factor: 'Accessibility',
    why: 'Difficult-to-reach or concealed areas may make investigation more involved',
  },
  {
    factor: 'Standalone sampling vs. broader evaluation',
    why: 'A broader property or moisture evaluation is a different scope from simply collecting samples',
  },
  {
    factor: 'Service area or travel',
    why: 'Provider-specific travel or service-area policies may affect pricing where applicable',
  },
]

export function CostFactors() {
  return (
    <Section tone="surface">
      <div className="max-w-3xl">
        <SectionHeading title="What Affects Mold Testing Cost?" />
        <div className="mt-6 flex flex-col gap-5">
          <div className="rounded-lg border border-site-border bg-site-surface-2 p-5">
            <p className="text-base leading-relaxed text-site-fg">
              There is no verified Gettysburg mold-testing average that we can responsibly publish
              based on the information available to us.
            </p>
          </div>
          <Prose>
            The price of mold testing or a broader property evaluation can vary based on what the
            provider is actually being asked to do.
          </Prose>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-site-border">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Mold testing cost factors and why each may affect price.
          </caption>
          <colgroup>
            <col style={{ width: '40%' }} />
            <col style={{ width: '60%' }} />
          </colgroup>
          <thead>
            <tr className="bg-site-surface-2">
              <th
                scope="col"
                className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent"
              >
                Cost factor
              </th>
              <th
                scope="col"
                className="border-l border-site-border px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent"
              >
                Why it may affect price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-site-border bg-site-surface">
            {COST_FACTORS.map((row) => (
              <tr key={row.factor}>
                <th
                  scope="row"
                  className="px-6 py-5 align-top text-base font-medium text-site-fg"
                >
                  {row.factor}
                </th>
                <td className="border-l border-site-border px-6 py-5 align-top text-base leading-relaxed text-site-muted-fg">
                  {row.why}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex max-w-3xl flex-col gap-5">
        <Prose>
          Before comparing mold-testing prices, compare what each provider is actually including.
        </Prose>
        <Prose>
          A lower-priced sampling service and a more comprehensive moisture or property evaluation
          may not represent equivalent services.
        </Prose>
        <p className="text-base font-medium text-site-fg">
          Ask whether the quoted price includes:
        </p>
        <NeutralList
          items={[
            'property evaluation',
            'moisture investigation',
            'sample collection',
            'number and type of samples',
            'laboratory charges',
            'written reporting',
            'interpretation or consultation',
            'follow-up services',
          ]}
        />
        <Prose>
          If remediation is ultimately recommended, testing costs are also different from the cost
          of correcting moisture conditions, removing or cleaning affected materials, and completing
          any necessary reconstruction.
        </Prose>
        <p className="text-base leading-relaxed text-site-fg">
          {/* TODO(internal-link): /mold-remediation-cost-gettysburg-pa/ not yet published. */}
          <ContextualLink href="/mold-remediation-cost-gettysburg-pa/" live={false}>
            See what affects mold remediation cost in Gettysburg.
          </ContextualLink>
        </p>
      </div>
    </Section>
  )
}

export function AfterTesting() {
  const sequence = [
    'Why was the test performed?',
    'What does the result actually establish?',
    'Does it change the recommended action?',
    'Has the moisture problem been addressed?',
  ]
  return (
    <Section tone="default">
      <div className="max-w-3xl">
        <SectionHeading
          title="What to Do After Mold Testing"
          intro="Once results are available, return to the reason the test was performed."
        />
        <Prose className="mt-6">Use this sequence:</Prose>
      </div>

      <ol className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
        {sequence.map((step, i) => (
          <li
            key={step}
            className="flex flex-1 items-center gap-3 rounded-lg border border-site-border bg-site-surface p-5 sm:min-w-[220px]"
          >
            <span className="font-display text-base font-semibold text-site-accent" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-base leading-snug text-site-fg">{step}</span>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex max-w-3xl flex-col gap-5">
        <Prose>
          If the testing was intended to investigate uncertain conditions, ask the provider to
          explain what the results establish and what their limitations are.
        </Prose>
        <Prose>
          If the results are being used to help inform remediation, ask how they affect the proposed
          scope.
        </Prose>
        <Prose>
          If testing was performed after remediation, compare the results with the agreed project
          criteria and other relevant property conditions.
        </Prose>
        <Prose>And keep the underlying moisture issue in view.</Prose>
        <Prose>
          If unwanted moisture is still entering or accumulating in the property, that condition
          still needs attention regardless of how much laboratory data has been collected.
        </Prose>
      </div>
    </Section>
  )
}
