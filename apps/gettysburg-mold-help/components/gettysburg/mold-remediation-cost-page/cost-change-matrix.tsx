const ROWS = [
  {
    factor: 'Affected area',
    why: 'More affected material can require additional labor and handling',
    impact: 'May increase project scope',
    question: 'Which areas are included in this estimate?',
  },
  {
    factor: 'Material type',
    why: 'Materials differ in whether and how they can be cleaned or removed',
    impact: 'Can change labor and removal requirements',
    question: 'Which materials will be cleaned, and which will be removed?',
  },
  {
    factor: 'Demolition',
    why: 'Access or removal may require building materials to be opened or removed',
    impact: 'Can add labor, disposal, and reconstruction',
    question: 'What demolition is included?',
  },
  {
    factor: 'Containment',
    why: 'Some projects require controls around the work area',
    impact: 'Can add setup, materials, and labor',
    question: 'What containment are you proposing and why?',
  },
  {
    factor: 'Moisture-source repair',
    why: 'Recurring moisture can undermine remediation if the underlying condition remains',
    impact: 'May involve separate repair work',
    question: 'Is the moisture source included in this scope?',
  },
  {
    factor: 'Accessibility',
    why: 'Concealed or difficult-to-reach areas may require additional work',
    impact: 'Can increase labor or demolition',
    question: 'Are there access limitations affecting this estimate?',
  },
  {
    factor: 'HVAC involvement',
    why: 'HVAC-related conditions can change the proposed scope',
    impact: 'May require additional evaluation or work',
    question: 'Does the HVAC system need to be addressed, and why?',
  },
  {
    factor: 'Reconstruction',
    why: 'Removed materials may need to be replaced after remediation',
    impact: 'Can materially change the total project price',
    question: 'Does this estimate include reconstruction?',
  },
  {
    factor: 'Testing/verification',
    why: 'Testing may be useful in some situations but not automatically necessary',
    impact: 'May be included or priced separately',
    question: 'What question will this testing answer?',
  },
]

export function CostChangeMatrix() {
  return (
    <div className="mt-10">
      {/* Desktop / tablet: semantic table. */}
      <div className="hidden overflow-hidden rounded-xl border border-site-border lg:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Why one remediation proposal may differ from another: project factor, why it matters,
            potential cost impact, and a question to ask the contractor.
          </caption>
          <colgroup>
            <col style={{ width: '20%' }} />
            <col style={{ width: '30%' }} />
            <col style={{ width: '22%' }} />
            <col style={{ width: '28%' }} />
          </colgroup>
          <thead>
            <tr className="bg-site-surface-2">
              <th
                scope="col"
                className="px-5 py-4 align-top text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent"
              >
                Project factor
              </th>
              <th
                scope="col"
                className="border-l border-site-border px-5 py-4 align-top text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent"
              >
                Why it matters
              </th>
              <th
                scope="col"
                className="border-l border-site-border px-5 py-4 align-top text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent"
              >
                Potential cost impact
              </th>
              <th
                scope="col"
                className="border-l border-site-border px-5 py-4 align-top text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent"
              >
                Question to ask the contractor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-site-border bg-site-surface">
            {ROWS.map((row) => (
              <tr key={row.factor}>
                <th
                  scope="row"
                  className="px-5 py-5 align-top text-base font-medium text-site-fg"
                >
                  {row.factor}
                </th>
                <td className="border-l border-site-border px-5 py-5 align-top text-sm leading-relaxed text-site-muted-fg">
                  {row.why}
                </td>
                <td className="border-l border-site-border px-5 py-5 align-top text-sm leading-relaxed text-site-muted-fg">
                  {row.impact}
                </td>
                <td className="border-l border-site-border px-5 py-5 align-top text-sm leading-relaxed text-site-fg">
                  &ldquo;{row.question}&rdquo;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile / tablet: stacked records — no horizontal scroll, labels preserved. */}
      <ul className="flex flex-col divide-y divide-site-border overflow-hidden rounded-xl border border-site-border bg-site-surface lg:hidden">
        {ROWS.map((row) => (
          <li key={row.factor} className="flex flex-col gap-5 px-5 py-8 sm:py-7">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
                Project factor
              </p>
              <p className="mt-1 text-base font-medium text-site-fg">{row.factor}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
                Why it matters
              </p>
              <p className="mt-1 text-base leading-relaxed text-site-muted-fg">{row.why}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
                Potential cost impact
              </p>
              <p className="mt-1 text-base leading-relaxed text-site-muted-fg">{row.impact}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
                Question to ask the contractor
              </p>
              <p className="mt-1 text-base leading-relaxed text-site-fg">
                &ldquo;{row.question}&rdquo;
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
