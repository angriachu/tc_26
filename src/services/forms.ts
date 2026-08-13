import { siteConfig } from "@/config/siteConfig";
import type { DemoRequest } from "@/types/forms";
import { createWhatsAppUrl } from "@/services/whatsapp";

export async function submitDemoRequest(data: DemoRequest) {
  if (!siteConfig.apiUrl) {
    return {
      development: false,
      message: "Your details are ready in WhatsApp. Tap Send to deliver your demo request.",
      whatsappUrl: createWhatsAppUrl("New TurboCart demo request", [
        ["Name", data.fullName], ["Business", data.businessName], ["Phone", data.phone],
        ["Email", data.email], ["Business type", data.businessType], ["Product", data.product],
        ["Billing counters", data.counters], ["Stores", data.stores], ["Message", data.message],
      ]),
    };
  }
  const response = await fetch(`${siteConfig.apiUrl.replace(/\/$/, "")}/demo-request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("We could not send your request. Please try again or contact our team.");
  return { development: false, message: "Thank you. The TurboCart team will contact you about your demo.", whatsappUrl: undefined };
}
