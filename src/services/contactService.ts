import { siteConfig } from "@/config/siteConfig";
import { createWhatsAppUrl } from "@/services/whatsapp";

export interface ContactRequest {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
}

export async function submitContactRequest(data: ContactRequest) {
  if (!siteConfig.apiUrl) {
    return {
      development: false,
      message: "Your details are ready in WhatsApp. Tap Send to deliver your enquiry.",
      whatsappUrl: createWhatsAppUrl("New TurboCart enquiry", [
        ["Name", data.fullName], ["Business", data.businessName], ["Email", data.email],
        ["Phone", data.phone], ["Enquiry type", data.enquiryType], ["Message", data.message],
      ]),
    };
  }
  const response = await fetch(`${siteConfig.apiUrl.replace(/\/$/, "")}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("We could not send your enquiry. Please try again.");
  return { development: false, message: "Thank you. The TurboCart team will contact you soon.", whatsappUrl: undefined };
}
