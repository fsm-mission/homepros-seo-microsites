import { Section, SectionHeading } from '@repo/shared/components/section'
import { Prose } from './primitives'

const QUESTIONS = [
  'What specific question will this test answer?',
  'Why is testing appropriate in this situation?',
  'What type of sampling are you recommending and why?',
  'How will the results be interpreted?',
  'What are the limitations of this testing method?',
  'Would the results change the recommended remediation scope or next step?',
  'Are you also investigating the moisture source?',
  'Who collects the samples?',
  'Who analyzes them?',
  'What happens after the results come back?',
  'What would we do differently depending on the result?',
]

export function QuestionsChecklist() {
  return (
    <Section tone="surface">
      <div className="max-w-3xl">
        <SectionHeading
          title="Questions to Ask Before Paying for Mold Testing"
          intro="If a provider recommends testing, you should be able to understand the reason for it."
        />
        <Prose className="mt-6">Start with the most important question:</Prose>
      </div>

      <ol className="mt-8 flex flex-col divide-y divide-site-border overflow-hidden rounded-xl border border-site-border bg-site-surface">
        {QUESTIONS.map((question, i) => (
          <li key={question} className="flex items-baseline gap-5 px-6 py-5">
            <span
              aria-hidden="true"
              className="font-display text-lg font-semibold tabular-nums text-site-accent"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-base leading-relaxed text-site-fg">{question}</p>
          </li>
        ))}
      </ol>

      <Prose className="mt-8 max-w-3xl">
        The provider should be able to connect the proposed testing to a specific question,
        decision, or project objective.
      </Prose>
    </Section>
  )
}
