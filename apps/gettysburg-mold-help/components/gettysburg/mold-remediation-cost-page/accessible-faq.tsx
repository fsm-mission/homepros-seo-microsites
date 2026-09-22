import { Section, SectionHeading } from '@repo/shared/components/section'
import { ContextualLink } from './primitives'

/**
 * Native <details>/<summary> accordion for accessibility. Intentionally renders
 * NO FAQPage structured data (per content spec).
 */
const FAQS: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'Is there an average mold remediation cost in Gettysburg?',
    answer: (
      <>
        <p>
          We are not publishing a Gettysburg average without representative local pricing data that
          supports one. Mold remediation covers a range of possible work, and the total depends on
          the affected area, materials, accessibility, containment, demolition, moisture-source
          repairs, reconstruction, and other project-specific conditions.
        </p>
        <p>
          Instead of relying on a generic number, focus on understanding the proposed scope and
          comparing equivalent work.
        </p>
      </>
    ),
  },
  {
    question: 'What makes mold remediation more expensive?',
    answer: (
      <p>
        Larger affected areas, materials that must be removed rather than cleaned, difficult access,
        containment, demolition, unresolved or complicated moisture problems, HVAC-related
        considerations, and reconstruction can each add to the scope. Visible size alone does not
        determine the price.
      </p>
    ),
  },
  {
    question: 'Is mold testing included in remediation cost?',
    answer: (
      <>
        <p>It depends on the provider and project.</p>
        <p>
          Testing is not automatically necessary for every mold situation. If it is proposed, ask
          what question the testing is intended to answer and whether it is included in the
          remediation estimate or priced separately.
        </p>
        <p>
          <ContextualLink href="/mold-testing-gettysburg-pa/" live>
            Learn more about mold testing in Gettysburg.
          </ContextualLink>
        </p>
      </>
    ),
  },
  {
    question: 'Is mold removal the same as mold remediation?',
    answer: (
      <>
        <p>Not exactly.</p>
        <p>
          &ldquo;Mold removal&rdquo; is often used broadly, but remediation is better understood as
          addressing problematic mold growth and affected materials as part of a defined scope,
          while also considering the moisture conditions contributing to the problem.
        </p>
        <p>The objective should not be framed as eliminating every mold spore from a building.</p>
        <p>
          <ContextualLink href="/mold-removal-vs-remediation/" live={false}>
            Learn more about mold removal vs. mold remediation.
          </ContextualLink>
        </p>
      </>
    ),
  },
  {
    question: 'Does a bigger mold area always mean a more expensive project?',
    answer: (
      <p>
        Not necessarily. A larger visible area can influence scope, but accessibility, affected
        materials, concealed conditions, containment, moisture problems, demolition, and
        reconstruction can matter alongside the size of the visible area. A smaller visible area is
        not automatically a simple project.
      </p>
    ),
  },
  {
    question: 'Should I choose the cheapest mold remediation quote?',
    answer: (
      <p>
        Compare scope before price. A lower estimate may exclude work that another proposal
        includes&mdash;such as moisture-source correction, demolition, or reconstruction. Two
        quotes are only comparable when they describe equivalent work.
      </p>
    ),
  },
  {
    question: 'Who pays for reconstruction after mold remediation?',
    answer: (
      <p>
        That depends on the project and the agreements involved. Some remediation proposals include
        reconstruction, and others end when remediation is complete. Before comparing totals,
        determine where each contractor&apos;s responsibility begins and ends, and who handles
        restoring removed materials and finishes.
      </p>
    ),
  },
  {
    question: 'Can I get an exact mold remediation price without an evaluation?',
    answer: (
      <p>
        A meaningful price generally depends on the property conditions, affected materials,
        moisture source, accessibility, and proposed scope. A number provided without understanding
        those conditions may not reflect the work your situation actually requires.
      </p>
    ),
  },
  {
    question: 'Can mold be completely eliminated from a home?',
    answer: (
      <p>
        The objective of remediation is not usually framed as removing every mold spore from a
        building. It is better understood as addressing problematic mold growth and affected
        materials while correcting the moisture conditions that allow mold to develop. Be cautious
        about &ldquo;100% mold removal&rdquo; or permanent &ldquo;mold-free&rdquo; promises.
      </p>
    ),
  },
  {
    question: 'Is professional mold remediation worth it?',
    answer: (
      <>
        <p>It depends on the situation.</p>
        <p>
          Professional remediation may be particularly appropriate when a project involves
          substantial affected materials, concealed areas, demolition, containment needs,
          complicated or unresolved moisture conditions, HVAC involvement, multiple affected areas,
          or significant reconstruction coordination.
        </p>
        <p>
          For more limited situations, the appropriate response depends on the actual conditions,
          affected materials, moisture source, and required scope.
        </p>
        <p>
          The decision should be based on what the property requires rather than an assumption that
          every mold situation needs the same professional remediation process.
        </p>
        <p>
          <ContextualLink href="/mold-removal-vs-remediation/" live={false}>
            Learn more about mold removal vs. mold remediation.
          </ContextualLink>
        </p>
      </>
    ),
  },
]

export function AccessibleFaq() {
  return (
    <Section id="faqs" tone="default" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading eyebrow="Questions & answers" title="Mold Remediation Cost FAQs" />
        <div className="mt-10 flex flex-col divide-y divide-site-border border-y border-site-border">
          {FAQS.map((item) => (
            <details key={item.question} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg font-medium text-site-fg">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-2xl leading-none text-site-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="flex flex-col gap-4 pb-5 pr-8 text-base leading-relaxed text-site-muted-fg">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
