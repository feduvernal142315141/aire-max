import type { ContactFormData } from "@/types";

export interface ContactSubmitResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactSubmitResult> {
  // TODO: Replace with actual API call when backend is ready
  // return apiClient.post<ContactSubmitResult>("/contact", data);

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Contact form submitted:", data);
  return {
    success: true,
    message:
      "Mensaje enviado correctamente. Nos pondremos en contacto pronto.",
  };
}
