import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogIn, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { products } from "@/data/siteData";
import { Button, Container } from "@/components/ui";
import Logo from "./Logo";

const nav = [["Features", "/features"], ["Solutions", "/solutions"], ["Industries", "/industries"], ["Why TurboCart", "/about"], ["Support", "/support"], ["Contact", "/contact"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const firstMobileLink = useRef<HTMLAnchorElement>(null);
  useEffect(() => { const onScroll = () => setScrolled(scrollY > 16); onScroll(); addEventListener("scroll", onScroll, { passive: true }); return () => removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { if (mobileOpen) firstMobileLink.current?.focus(); }, [mobileOpen]);

  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled || mobileOpen ? "border-white/10 bg-ink/85 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
    <Container className="flex h-20 items-center justify-between">
      <Logo />
      <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
        <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
          <button onClick={() => setProductsOpen(!productsOpen)} aria-expanded={productsOpen} className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white">Products <ChevronDown className="h-3.5 w-3.5" /></button>
          <AnimatePresence>{productsOpen && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4"><div className="glass grid gap-2 rounded-2xl p-3 shadow-2xl">{products.map(({ name, path, icon: Icon, description }) => <Link key={path} to={path} onClick={() => setProductsOpen(false)} className="flex items-start gap-4 rounded-xl p-4 transition hover:bg-white/[.06]"><span className="rounded-xl bg-blue-500/10 p-2.5 text-cyan-300"><Icon className="h-5 w-5" /></span><span><span className="block font-bold text-white">{name}</span><span className="mt-1 block text-sm text-slate-400">{description}</span></span></Link>)}</div></motion.div>}</AnimatePresence>
        </div>
        {nav.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? "text-cyan-300" : "text-slate-300 hover:text-white"}`}>{label}</NavLink>)}
      </nav>
      <div className="hidden items-center gap-2 lg:flex">
        <a href="https://turbocart.fixlab.co.in/login" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-slate-300 transition hover:text-white">
          Login <LogIn className="h-4 w-4" />
        </a>
        <Button to="/contact" variant="ghost">Talk to sales</Button><Button to="/request-demo">Request demo</Button>
      </div>
      <button aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white lg:hidden">{mobileOpen ? <X /> : <Menu />}</button>
    </Container>
    <AnimatePresence>{mobileOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-ink lg:hidden"><Container className="space-y-1 py-5">
      <p className="px-3 pb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Products</p>{products.map((p, i) => <Link ref={i === 0 ? firstMobileLink : undefined} key={p.path} to={p.path} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 font-semibold text-slate-200 hover:bg-white/5"><p.icon className="h-5 w-5 text-cyan-300" />{p.name}</Link>)}
      <div className="my-3 border-t border-white/10" />{nav.map(([label, path]) => <Link key={path} to={path} onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-3 font-semibold text-slate-200 hover:bg-white/5">{label}</Link>)}
      <a href="https://turbocart.fixlab.co.in/login" onClick={() => setMobileOpen(false)} className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/[.1]">
        Login <LogIn className="h-4 w-4" />
      </a>
      <Button to="/request-demo" className="mt-2 w-full" onClick={() => setMobileOpen(false)}>Request demo</Button>
    </Container></motion.div>}</AnimatePresence>
  </header>;
}
