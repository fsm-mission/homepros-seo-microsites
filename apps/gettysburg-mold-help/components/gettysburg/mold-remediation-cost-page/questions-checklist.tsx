import { Section, SectionHeading } from '@repo/shared/components/section'
import { Prose } from './primitives'

const QUESTIONS = [
  'Which areas and materials are included in this scope?',
  'Which materials will be cleaned, and which will be removed?',
  'What containment is proposed, and why?',
  'Has the moisture source been identified?',
  'Is moisture-source correction included or handled separately?',
  'What demolition is included?',
  'What reconstruction is included?',
  'Is testing or verification being recommended? If so, what specific question will it answer?',
  'Who is responsible for disposal and cleanup?',
  'What is specifically excluded from the estimate?',
  'What warranties or guarantees are actually included?',
  'What could cause the scope or price to change after work begins?',
  'How would I approve additional work?',
  'Who will be responsible for each phase of the project?',
]

export function QuestionsBeforeHiring() {
  return (
    <Section tone="surface" className="py-16 sm:py-20">
      <div className="max-w-3xl">
        <SectionHeading title="Questions to Ask Before Hiring" />
        <Prose className="mt-6">Before approving a mold remediation proposal, consider asking:</Prose>
      </div>

      <ol className="mt-8 flex flex-col divide-y divide-site-border overflow-hidden rounded-xl border border-site-border bg-site-surface">
        {QUESTIONS.map((question, i) => (
          <li key={question} className="flex items-baseline gap-5 px-6 py-6 sm:py-5">
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
        A useful estimate should help you understand what you are purchasing&mdash;not leave you
        guessing about what happens after work begins.
      </Prose>
    </Section>
  )
}
