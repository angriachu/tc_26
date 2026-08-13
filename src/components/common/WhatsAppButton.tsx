import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function WhatsAppButton() {
  if (!siteConfig.whatsapp) return null;
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  return <a href={`https://wa.me/${number}`} target="_blank" rel="noreferrer" aria-label="Contact TurboCart on WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-400"><MessageCircle className="h-5 w-5"/></a>;
}
