import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

export function Button({ to, children, variant = "primary", className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { to?: string; variant?: "primary" | "secondary" | "ghost" }) {
  const styles = variant === "primary" ? "bg-white text-slate-950 hover:bg-cyan-100 shadow-[0_12px_40px_rgba(37,99,235,.25)]" : variant === "secondary" ? "border border-white/15 bg-white/[.06] text-white hover:bg-white/[.1]" : "text-slate-300 hover:text-white";
  const content = <>{children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>;
  const cls = `group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${styles} ${className}`;
  if (to && /^https?:\/\//.test(to)) return <a href={to} className={cls}>{content}</a>;
  return to ? <Link to={to} className={cls}>{content}</Link> : <button className={cls} {...props}>{content}</button>;
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.07] px-3 py-1 text-xs font-bold uppercase tracking-[.18em] text-cyan-200">{children}</span>;
}

export function SectionHeading({ eyebrow, title, description, center = false }: { eyebrow?: string; title: ReactNode; description?: string; center?: boolean }) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
    {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-cyan-300">{eyebrow}</p>}
    <h2 className="text-balance text-3xl font-extrabold tracking-[-.04em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
    {description && <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">{description}</p>}
  </div>;
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

export function PageHero({ badge, title, description, children }: { badge: string; title: ReactNode; description: string; children?: ReactNode }) {
  return <section className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
    <div className="site-grid absolute inset-0" /><div className="absolute left-1/3 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
    <Container className="relative"><Reveal><Badge>{badge}</Badge><h1 className="mt-7 max-w-5xl text-4xl font-extrabold tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{description}</p>{children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}</Reveal></Container>
  </section>;
}
