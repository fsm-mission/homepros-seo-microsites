import { Container } from './container'

export function TrustStrip({ items }: { items: string[] }) {
  return (
    <div className="border-y border-site-border bg-site-surface">
      <Container>
        <ul className="flex flex-col divide-y divide-site-border sm:flex-row sm:divide-x sm:divide-y-0">
          {items.map((item) => (
            <li
              key={item}
              className="flex-1 py-4 text-sm font-medium text-site-muted-fg sm:px-6 sm:first:pl-0 sm:last:pr-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
