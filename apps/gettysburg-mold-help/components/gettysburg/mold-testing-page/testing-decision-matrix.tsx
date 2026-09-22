const ROWS = [
  {
    situation: 'Visible mold is already present',
    help: 'Often limited value simply to confirm mold exists',
    consider:
      'Identify the moisture problem and determine how affected materials should be addressed',
  },
  {
    situation: 'Musty odor but no visible source',
    help: 'Possibly',
    consider: 'Investigate for hidden moisture or an unidentified source',
  },
  {
    situation: 'Previous water damage with uncertain conditions',
    help: 'Possibly',
    consider:
      'Determine whether moisture remains and what areas or materials may have been affected',
  },
  {
    situation: 'Hidden moisture is suspected',
    help: 'Testing may sometimes help, but it does not replace moisture investigation',
    consider: 'Investigate the location and extent of unwanted moisture',
  },
  {
    situation: 'Someone has a health concern',
    help: 'Testing should not be used to diagnose an illness',
    consider: 'Discuss health concerns with an appropriate healthcare professional',
  },
  {
    situation: 'Testing is proposed before remediation',
    help: 'Depends',
    consider:
      'Ask what question the test will answer and whether the result would change the proposed work',
  },
  {
    situation: 'Post-remediation verification is being considered',
    help: 'May be useful depending on the project',
    consider: 'Clarify what is being verified and what completion criteria apply',
  },
  {
    situation: 'Conditions are disputed or documentation is needed',
    help: 'Potentially',
    consider:
      'Define what information needs to be documented before choosing a testing method',
  },
]

export function TestingDecisionMatrix() {
  return (
    <div className="mt-10">
      {/* Desktop / tablet: semantic table (32% / 22% / 46%). */}
      <div className="hidden overflow-hidden rounded-xl border border-site-border md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Should I test for mold? Your situation, whether testing may help, and what to consider
            first.
          </caption>
          <colgroup>
            <col style={{ width: '32%' }} />
            <col style={{ width: '22%' }} />
            <col style={{ width: '46%' }} />
          </colgroup>
          <thead>
            <tr className="bg-site-surface-2">
              <th
                scope="col"
                className="px-6 py-4 align-top text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent"
              >
                Your situation
              </th>
              <th
                scope="col"
                className="border-l border-site-border px-6 py-4 align-top text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent"
              >
                Testing may help?
              </th>
              <th
                scope="col"
                className="border-l border-site-border px-6 py-4 align-top text-xs font-semibold uppercase tracking-[0.12em] font-mono text-site-accent"
              >
                What to consider first
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-site-border bg-site-surface">
            {ROWS.map((row) => (
              <tr key={row.situation}>
                <th
                  scope="row"
                  className="px-6 py-5 align-top text-base font-medium text-site-fg"
                >
                  {row.situation}
                </th>
                <td className="border-l border-site-border px-6 py-5 align-top">
                  <span className="inline-block rounded-md border border-site-border bg-site-surface-2 px-2.5 py-1 text-sm leading-relaxed text-site-fg">
                    {row.help}
                  </span>
                </td>
                <td className="border-l border-site-border px-6 py-5 align-top text-sm leading-relaxed text-site-muted-fg">
                  {row.consider}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked DecisionItems — no horizontal scroll, labels preserved. */}
      <ul className="flex flex-col divide-y divide-site-border overflow-hidden rounded-xl border border-site-border bg-site-surface md:hidden">
        {ROWS.map((row) => (
          <li key={row.situation} className="flex flex-col gap-5 px-5 py-8 sm:py-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
                Your situation
              </p>
              <p className="mt-1 text-base font-medium text-site-fg">{row.situation}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
                Testing may help?
              </p>
              <p className="mt-1 text-base leading-relaxed text-site-fg">{row.help}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] font-mono text-site-accent">
                What to consider first
              </p>
              <p className="mt-1 text-base leading-relaxed text-site-muted-fg">{row.consider}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
