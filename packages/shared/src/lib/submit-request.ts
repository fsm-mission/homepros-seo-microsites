'use server'

import type { SiteKey } from './site-config'

/**
 * Isolated lead-submission interface.
 *
 * There is intentionally NO live backend wired here (no CRM, webhook, email
 * recipient, API endpoint, database, or automation platform). The real lead
 * destination is confirmed separately under the build-intake contract and
 * plugged into `deliverRequest` below.
 *
 * Until then, submissions resolve to a safe, non-production "received" state.
 * We never claim a request was "sent to a provider" because no routing exists.
 */

export type RequestResult =
  | { status: 'received' }
  | { status: 'error'; message: string }

export type LeadPayload = {
  site: SiteKey
  name: string
  phone: string
  email: string
  zip: string
  description: string
  preferredContact: string
  hasRadonResult?: string
  radonLevel?: string
}

async function deliverRequest(_payload: LeadPayload): Promise<void> {
  // No-op placeholder. Wire the approved lead destination here once confirmed.
  return
}

function isNonEmpty(value: FormDataEntryValue | null): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export async function submitRequest(
  site: SiteKey,
  _prevState: RequestResult | null,
  formData: FormData,
): Promise<RequestResult> {
  const name = formData.get('name')
  const phone = formData.get('phone')
  const email = formData.get('email')
  const zip = formData.get('zip')

  if (!isNonEmpty(name)) return { status: 'error', message: 'Please enter your name.' }
  if (!isNonEmpty(phone) && !isNonEmpty(email)) {
    return { status: 'error', message: 'Please provide a phone number or email.' }
  }
  if (isNonEmpty(email)) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email.trim())) {
      return { status: 'error', message: 'Please enter a valid email address.' }
    }
  }
  if (!isNonEmpty(zip)) return { status: 'error', message: 'Please enter your ZIP Code.' }

  const payload: LeadPayload = {
    site,
    name: String(name).trim(),
    phone: isNonEmpty(phone) ? phone.trim() : '',
    email: isNonEmpty(email) ? email.trim() : '',
    zip: String(zip).trim(),
    description: String(formData.get('description') ?? '').trim(),
    preferredContact: String(formData.get('preferredContact') ?? '').trim(),
    hasRadonResult: String(formData.get('hasRadonResult') ?? '').trim() || undefined,
    radonLevel: String(formData.get('radonLevel') ?? '').trim() || undefined,
  }

  try {
    await deliverRequest(payload)
    return { status: 'received' }
  } catch {
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  }
}
