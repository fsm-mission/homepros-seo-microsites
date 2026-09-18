import Link from 'next/link'
import { cn } from '../lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors disabled:opacity-60 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary: 'bg-site-primary text-site-primary-fg hover:bg-site-primary-hover',
  secondary:
    'bg-site-surface text-site-fg border border-site-border hover:bg-site-surface-2',
  ghost: 'text-site-primary hover:bg-site-surface-2',
  onDark: 'bg-site-dark-fg text-site-dark hover:bg-white',
}

export function SiteButton({
  href,
  variant = 'primary',
  className,
  children,
  type = 'button',
  ...rest
}: {
  href?: string
  variant?: Variant
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit'
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  if (href) {
    return (
      <Link href={href} className={cn(base, variants[variant], className)}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}
