import { siteConfig } from "@/config/siteConfig";

export function createWhatsAppUrl(title: string, fields: Array<[string, string | number | undefined]>) {
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  const details = fields
    .filter(([, value]) => value !== undefined && String(value).trim() !== "")
    .map(([label, value]) => `*${label}:* ${value}`);
  const message = [`*${title}*`, "", ...details].join("\n");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
