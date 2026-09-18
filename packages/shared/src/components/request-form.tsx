'use client'

import { useActionState } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import type { SiteKey } from '../lib/site-config'
import { submitRequest, type RequestResult } from '../lib/submit-request'
import { cn } from '../lib/utils'

const fieldClass =
  'w-full rounded-md border border-site-border bg-site-surface px-3.5 py-2.5 text-sm text-site-fg placeholder:text-site-muted-fg/70 focus:border-site-primary focus:outline-none focus:ring-2 focus:ring-site-ring/30'

const labelClass = 'flex flex-col gap-1.5 text-sm font-medium text-site-fg'

export function RequestForm({
  site,
  showRadonFields = false,
  descriptionLabel,
  descriptionPlaceholder,
}: {
  site: SiteKey
  showRadonFields?: boolean
  descriptionLabel: string
  descriptionPlaceholder: string
}) {
  const action = submitRequest.bind(null, site)
  const [state, formAction, pending] = useActionState<RequestResult | null, FormData>(
    action,
    null,
  )

  if (state?.status === 'received') {
    return (
      <div className="flex flex-col items-start gap-3 rounded-lg border border-site-primary/40 bg-site-surface p-6">
        <CheckCircle2 className="size-8 text-site-primary" />
        <h3 className="font-display text-xl font-semibold text-site-fg">Request received</h3>
        <p className="text-sm leading-relaxed text-site-muted-fg">
          Thanks — your request has been received. A member of the HomePros Team will review the
          details and follow up about connecting you with an appropriate participating provider.
          We&apos;ll use the contact method you selected.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Full name
          <input name="name" autoComplete="name" required className={fieldClass} />
        </label>
        <label className={labelClass}>
          ZIP Code
          <input name="zip" inputMode="numeric" autoComplete="postal-code" required className={fieldClass} />
        </label>
        <label className={labelClass}>
          Phone
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Email
          <input name="email" type="email" autoComplete="email" className={fieldClass} />
        </label>
      </div>

      {showRadonFields ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>
            Do you have a radon test result?
            <select name="hasRadonResult" defaultValue="" className={fieldClass}>
              <option value="">Select one</option>
              <option value="yes">Yes, I have a result</option>
              <option value="no">No, not yet</option>
              <option value="unsure">Not sure</option>
            </select>
          </label>
          <label className={labelClass}>
            Result level, if known (pCi/L)
            <input
              name="radonLevel"
              inputMode="decimal"
              placeholder="Optional"
              className={fieldClass}
            />
          </label>
        </div>
      ) : null}

      <label className={labelClass}>
        {descriptionLabel}
        <textarea
          name="description"
          rows={4}
          placeholder={descriptionPlaceholder}
          className={cn(fieldClass, 'resize-y')}
        />
      </label>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-1 text-sm font-medium text-site-fg">Preferred contact method</legend>
        <div className="flex flex-wrap gap-4">
          {['Phone', 'Email', 'Either'].map((opt, i) => (
            <label key={opt} className="flex items-center gap-2 text-sm text-site-muted-fg">
              <input
                type="radio"
                name="preferredContact"
                value={opt}
                defaultChecked={i === 0}
                className="size-4 accent-site-primary"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      {state?.status === 'error' ? (
        <p className="flex items-center gap-2 text-sm font-medium text-red-700" role="alert">
          <AlertCircle className="size-4" /> {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-md bg-site-primary px-6 py-3 text-sm font-semibold text-site-primary-fg transition-colors hover:bg-site-primary-hover disabled:opacity-60"
      >
        {pending ? 'Submitting…' : 'Request Help'}
      </button>

      <p className="text-xs leading-relaxed text-site-muted-fg">
        By submitting, you agree to be contacted about your request. Submitting a request does not
        create an obligation to hire anyone. HomePros Team connects homeowners with independent
        participating providers.
      </p>
    </form>
  )
}
