import { Section, SectionHeading } from '@repo/shared/components/section'

/**
 * Native <details>/<summary> accordion for accessibility. Intentionally renders
 * NO FAQPage structured data (per content spec).
 */
const FAQS: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'What are signs I may need mold testing?',
    answer: (
      <p>
        Persistent musty odors, suspected hidden moisture, uncertain conditions after previous water
        damage, recurring visible growth, or situations requiring specific documentation may justify
        further evaluation. But further evaluation and mold testing are not necessarily the same
        thing. Depending on the circumstances, investigating moisture, building materials, previous
        water damage, or concealed areas may be more useful than immediately ordering air or surface
        samples.
      </p>
    ),
  },
  {
    question: 'Is mold testing worth it?',
    answer: (
      <p>
        It can be when the results are expected to answer a specific question or materially affect a
        decision. Testing may provide less value when mold is already clearly visible and the more
        important questions involve the moisture source, affected materials, extent of the problem,
        and remediation scope. Before paying for testing, ask: What will I know or do differently
        because of this test?
      </p>
    ),
  },
  {
    question: 'Do I need mold testing if I can already see mold?',
    answer: (
      <p>
        Not necessarily. EPA guidance states that sampling is usually unnecessary when visible mold
        growth is present. Instead of testing simply to establish that mold exists, it may be more
        useful to determine what caused the moisture, what materials are affected, and what work is
        appropriate.
      </p>
    ),
  },
  {
    question: 'Does every mold remediation project require air testing?',
    answer: (
      <p>
        No. Air sampling should not be treated as an automatic requirement for every
        mold-remediation project. Whether testing or post-remediation verification is appropriate
        depends on the circumstances, scope, and question the testing is intended to answer.
      </p>
    ),
  },
  {
    question: 'How much does a certified mold inspector cost in Gettysburg?',
    answer: (
      <p>
        We are not publishing a Gettysburg average without representative local pricing data that
        supports one. The cost of a mold evaluation or testing service can vary based on the scope
        of the evaluation, number and type of samples, air versus surface sampling, laboratory
        charges, property size and complexity, accessibility, and whether the service involves
        sampling alone or a broader moisture/property investigation. Also, the phrase &ldquo;certified
        mold inspector&rdquo; should not be interpreted as a Pennsylvania state mold-inspector
        license. Ask the provider what credentials they hold, who issued them, and what those
        credentials actually represent.
      </p>
    ),
  },
  {
    question: 'Can mold testing tell me whether mold is making me sick?',
    answer: (
      <p>
        Mold testing should not be used as a medical diagnosis or to determine the cause of an
        individual&apos;s symptoms. If you have health concerns, discuss them with an appropriate
        healthcare professional.
      </p>
    ),
  },
  {
    question: 'What is the difference between mold testing and a mold inspection?',
    answer: (
      <p>
        Provider terminology varies. Testing generally refers to collecting samples for analysis. A
        broader inspection or evaluation may involve visible conditions, moisture, previous water
        damage, affected materials, accessibility, and other property-specific factors. Ask exactly
        what the service includes rather than relying on the service name alone.
      </p>
    ),
  },
  {
    question: 'Is air testing better than surface testing?',
    answer: (
      <p>
        Not automatically. Air and surface sampling provide different kinds of information. The
        appropriate method depends on what is being investigated and how the results will be used.
        Ask why a particular method is being recommended rather than assuming one is inherently
        superior.
      </p>
    ),
  },
  {
    question: 'Should I test after mold remediation?',
    answer: (
      <p>
        Testing or other post-remediation verification may be appropriate for some projects, but it
        should not be assumed that every project requires exactly the same procedure. Ask what
        completion criteria apply to the project and what the proposed verification is intended to
        establish.
      </p>
    ),
  },
  {
    question: 'Does Pennsylvania license mold testers?',
    answer: (
      <p>
        Pennsylvania does not have a specialized state household-mold testing license in the way
        consumers may sometimes assume. Do not interpret general contractor registration, a private
        certification, or another credential as a Pennsylvania government endorsement of a
        provider&apos;s mold-testing recommendations. Ask what credentials the provider actually
        holds, who issued them, and what they cover.
      </p>
    ),
  },
  {
    question: 'Can you sell a house with mold in Pennsylvania?',
    answer: (
      <p>
        Mold, moisture damage, previous water events, inspections, repairs, and related property
        conditions may become relevant during a Pennsylvania real-estate transaction. The legal
        obligations that apply depend on the property, transaction, contracts, disclosures, and
        specific circumstances. For questions about Pennsylvania real-estate disclosure requirements
        or other legal obligations, consult an appropriate Pennsylvania real-estate professional or
        attorney rather than relying on a mold-testing company for legal advice.
      </p>
    ),
  },
]

export function AccessibleFaq() {
  return (
    <Section id="faqs" tone="default" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading eyebrow="Questions & answers" title="Mold Testing FAQs" />
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
              <div className="pb-5 pr-8 text-base leading-relaxed text-site-muted-fg">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
