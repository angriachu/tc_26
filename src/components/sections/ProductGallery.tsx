import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Expand, Monitor } from "lucide-react";
import { Badge } from "@/components/ui";

const screenshots = [
  { id: "dashboard", label: "Dashboard", title: "Owner command center", description: "Sales, billing, employees, products, daily closing, inventory and live counter visibility.", src: "/video/turbocart-laptop-hero.mp4", media: "video" },
  { id: "billing", label: "Billing", title: "Dedicated POS workspace", description: "A focused, keyboard-led checkout interface with customer and payment controls.", src: "/images/windows/billing-pos.png" },
  { id: "purchases", label: "Purchases", title: "Purchasing and settlement", description: "Purchase entries, supplier invoices, credit tracking, returns and bill settlement.", src: "/images/windows/purchases.png" },
  { id: "invoice-import", label: "Invoice import", title: "Supplier invoice import", description: "Bring PDF, image or extracted invoice information into product matching and purchase workflows.", src: "/images/windows/invoice-import.png" },
  { id: "finance", label: "Cash & bank", title: "Cash and bank control", description: "Receipts, payments, expenses, counter summaries, reconciliation and daily closing views.", src: "/images/windows/cash-bank.png" },
  { id: "ledger", label: "Ledger", title: "Connected retail accounting", description: "Chart of accounts, trial balance, profit-and-loss and detailed ledger search.", src: "/images/windows/ledger.png" },
  { id: "sales", label: "Sales", title: "Invoice-level sales control", description: "Review bill details, GST, payment information and permitted post-sale actions.", src: "/images/windows/sales-detail.png" },
  { id: "reports", label: "Reports", title: "Detailed retail reports", description: "Invoice-level sales reporting with GST, payment, counter, cashier and customer information.", src: "/images/windows/reports.png" },
  { id: "labels", label: "Labels", title: "Barcode and shelf labels", description: "Prepare product labels, price-change batches and weighing-scale PLU exports.", src: "/images/windows/barcode-labels.png" },
  { id: "wastage", label: "Wastage", title: "Wastage and shrinkage", description: "Record damaged, expired or written-off stock with approval and audit context.", src: "/images/windows/wastage.png" },
  { id: "audit", label: "Activity logs", title: "Operational audit trail", description: "Review logins, user actions, configuration changes and stock-related activity.", src: "/images/windows/activity-logs.png" },
  { id: "signin", label: "Access", title: "Secure staff access", description: "A clear sign-in experience for authorized store administrators and cashiers.", src: "/images/windows/sign-in.png" },
] as const;

const assetUrl = (src: string) => `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function ProductGallery({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<(typeof screenshots)[number]>(screenshots[0]);
  const reducedMotion = useReducedMotion();
  const isVideo = "media" in active && active.media === "video";
  const activeSrc = assetUrl(active.src);

  return <div>
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><Badge><Monitor className="h-3.5 w-3.5"/> Real product interface</Badge><h3 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">{active.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{active.description}</p></div><div role="tablist" aria-label="TurboCart product screenshots" className="no-scrollbar flex max-w-full gap-2 overflow-x-auto pb-1">{screenshots.map(item=><button key={item.id} role="tab" aria-selected={active.id===item.id} onClick={()=>setActive(item)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${active.id===item.id?"bg-white text-slate-950":"border border-white/10 bg-white/[.03] text-slate-400 hover:text-white"}`}>{item.label}</button>)}</div></div>
    <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/15 bg-[#080c18] p-1.5 shadow-[0_35px_100px_rgba(0,0,0,.45)] sm:rounded-3xl sm:p-2">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2"><div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-rose-400/70"/><i className="h-2 w-2 rounded-full bg-amber-300/70"/><i className="h-2 w-2 rounded-full bg-emerald-400/70"/></div><span className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-500">TurboCart Windows · {isVideo ? "Product animation" : "Product screenshot"}</span><a href={activeSrc} target="_blank" rel="noreferrer" aria-label={`Open ${active.label} ${isVideo ? "animation" : "screenshot"} full size`} className="rounded-md p-1 text-slate-500 transition hover:text-cyan-300"><Expand className="h-4 w-4"/></a></div>
      <AnimatePresence mode="wait">{isVideo
        ? <motion.video key={activeSrc} initial={{opacity:0,scale:.995}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:.25}} src={activeSrc} autoPlay={!reducedMotion} loop muted playsInline preload="metadata" disablePictureInPicture controlsList="nodownload noplaybackrate" aria-label="TurboCart dashboard product animation" className="aspect-video w-full rounded-b-xl bg-[#060a15] object-cover sm:rounded-b-2xl"/>
        : <motion.img key={activeSrc} initial={{opacity:0,scale:.995}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:.25}} src={activeSrc} alt={`TurboCart Windows ${active.label} interface`} width="1920" height="1080" loading={compact?"lazy":"eager"} decoding="async" className="aspect-video w-full rounded-b-xl object-cover object-top sm:rounded-b-2xl"/>
      }</AnimatePresence>
    </div>
    <p className="mt-3 text-center text-[10px] uppercase tracking-[.14em] text-slate-600">Actual TurboCart interface · Store names and values shown are demonstration or captured environment data</p>
  </div>;
}
