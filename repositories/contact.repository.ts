import "server-only"

import { submitContactForm } from "@/services"
import type { ContactSubmitResult } from "@/services"
import type { ContactFormData, ContactSubmission, ContactSubmissionStatus } from "@/types"

import { canUseSupabase, throwWriteUnavailable } from "./_runtime"

const submissionsFallback: ContactSubmission[] = []

export async function submitContact(data: ContactFormData): Promise<ContactSubmitResult> {
  if (!canUseSupabase()) {
    return submitContactForm(data)
  }

  // TODO S3: insert en `contact_submissions` vía Supabase
  return submitContactForm(data)
}

export async function findAllContactSubmissions(): Promise<ContactSubmission[]> {
  if (!canUseSupabase()) {
    return submissionsFallback
  }

  // TODO S3: query real a Supabase
  return submissionsFallback
}

export async function updateContactSubmissionStatus(
  _id: string,
  _status: ContactSubmissionStatus,
): Promise<void> {
  throwWriteUnavailable("contact.updateStatus")
}
