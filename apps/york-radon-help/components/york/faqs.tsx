import type { FaqItem } from '@repo/shared/components/faq'

export const yorkFaqs: FaqItem[] = [
  {
    question: 'What radon level requires mitigation?',
    answerText:
      'The EPA action level is 4.0 pCi/L. At or above this level, EPA guidance recommends taking steps to reduce radon. Radon risk also exists below 4.0 pCi/L, so EPA guidance should be used when deciding what your result means and whether reduction measures make sense.',
    answer: (
      <p>
        The EPA action level is 4.0 pCi/L. At or above this level, EPA guidance recommends taking
        steps to reduce radon. Radon risk also exists below 4.0 pCi/L, so EPA guidance should be used
        when deciding what your result means and whether reduction measures make sense for your home.
      </p>
    ),
  },
  {
    question: 'Is 4.0 pCi/L a “safe versus dangerous” line?',
    answerText:
      'No. 4.0 pCi/L is the EPA action level for taking steps to reduce radon, not a boundary between safe and dangerous. Radon risk exists below the action level as well. The action level is a guidance threshold for deciding when to act.',
    answer: (
      <p>
        No. 4.0 pCi/L is the EPA action level for taking steps to reduce radon, not a boundary
        between safe and dangerous. Radon risk exists below the action level as well. Treat it as a
        guidance threshold for deciding when to act, not a guarantee of safety below it.
      </p>
    ),
  },
  {
    question: 'Can a radon map tell me my home’s radon level?',
    answerText:
      'No. Radon maps describe regional potential, not the concentration in a specific house. Homes in the same area — even neighboring homes — can produce different results. Only testing your home can establish its radon level.',
    answer: (
      <p>
        No. Radon maps describe regional potential, not the concentration in a specific house. Homes
        in the same area — even neighboring homes — can produce different results. Only testing your
        home can establish its radon level.
      </p>
    ),
  },
  {
    question: 'How much does radon mitigation cost in York?',
    answerText:
      'There is no responsible single price. Cost depends on foundation type and layout, home size and construction, accessibility and routing paths, the mitigation approach, system design complexity, follow-up testing, and any related repairs or sealing. A useful estimate should explain the proposed system and why.',
    answer: (
      <p>
        There is no responsible single price. Cost depends on foundation type and layout, home size
        and construction, accessibility and routing paths, the mitigation approach, system design
        complexity, follow-up testing, and any related repairs or sealing. A useful estimate should
        explain the proposed system and why, rather than giving a number without the scope behind
        it.
      </p>
    ),
  },
  {
    question: 'Does Pennsylvania require radon contractors to be certified?',
    answerText:
      'Pennsylvania requires certification for radon testing and mitigation services. Ask any provider for their certification and verify it independently using official Commonwealth resources. Certification is a credential to confirm, not a government endorsement of a specific company.',
    answer: (
      <p>
        Pennsylvania requires certification for radon testing and mitigation services. Ask any
        provider for their certification and verify it independently using official Commonwealth
        resources. Certification is a credential to confirm — not a government endorsement of a
        specific company.
      </p>
    ),
  },
  {
    question: 'Should I retest after a mitigation system is installed?',
    answerText:
      'Follow-up testing is used to confirm whether the system is achieving the intended reduction. Ask your provider how and when they will confirm the result, since verifying the outcome is an important part of the process.',
    answer: (
      <p>
        Follow-up testing is used to confirm whether the system is achieving the intended reduction.
        Ask your provider how and when they will confirm the result, since verifying the outcome is
        an important part of the process rather than an optional add-on.
      </p>
    ),
  },
  {
    question: 'Does an older home automatically have higher radon?',
    answerText:
      'No. Housing age relates to potential installation complexity and local context, not to radon concentration. An older home is not automatically a higher-radon home. Only testing a specific home can establish its radon level.',
    answer: (
      <p>
        No. Housing age relates to potential installation complexity and local context, not to radon
        concentration. An older home is not automatically a higher-radon home. Only testing a
        specific home can establish its radon level.
      </p>
    ),
  },
  {
    question: 'What does York Radon Help actually do?',
    answerText:
      'York Radon Help is managed by HomePros Team. We review and manage your request and, when appropriate, connect you with a Pennsylvania-certified participating provider. The provider handles testing, mitigation recommendations, pricing, installation, and any services you decide to hire. We are not the company installing the system.',
    answer: (
      <p>
        York Radon Help is managed by HomePros Team. We review and manage your request and, when
        appropriate, connect you with a Pennsylvania-certified participating provider. The provider
        handles testing, mitigation recommendations, pricing, installation, and any services you
        decide to hire. We are not the company installing the system.
      </p>
    ),
  },
]
