import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-site-muted-fg">
        <li>
          <Link href="/" className="transition-colors hover:text-site-fg">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="flex items-center">
          <ChevronRight className="size-4 text-site-muted-fg/60" />
        </li>
        <li>
          <span aria-current="page" className="font-medium text-site-fg">
            Mold Testing in Gettysburg, PA
          </span>
        </li>
      </ol>
    </nav>
  )
}
