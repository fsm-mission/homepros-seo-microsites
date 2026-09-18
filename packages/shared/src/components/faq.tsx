import { ChevronDown } from 'lucide-react'

export type FaqItem = { question: string; answer: React.ReactNode; answerText: string }

export function Faq({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answerText },
    })),
  }

  return (
    <div className="flex flex-col gap-3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-lg border border-site-border bg-site-surface open:bg-site-surface"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-lg font-medium text-site-fg [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown className="size-5 shrink-0 text-site-accent transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-5 pb-5 text-base leading-relaxed text-site-muted-fg">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
