export type ContactSubmissionStatus = "new" | "read" | "responded" | "archived"

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string | null
  service?: string | null
  message: string
  status: ContactSubmissionStatus
  createdAt: string
}
