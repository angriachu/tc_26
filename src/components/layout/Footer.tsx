import { Link } from "react-router-dom";
import { Container, Button } from "@/components/ui";
import Logo from "./Logo";
import { siteConfig } from "@/config/siteConfig";

const groups = {
  Products: [["Windows POS", "/windows-pos"], ["Cloud", "/cloud"], ["Mobile", "/mobile"], ["Features", "/features"]],
  Solutions: [["POS billing", "/solutions"], ["Inventory", "/features"], ["Purchases", "/features"], ["Reports", "/features"]],
  Company: [["About", "/about"], ["Industries", "/industries"], ["Contact", "/contact"], ["Support", "/support"]],
  Legal: [["Privacy policy", "/privacy-policy"], ["Terms of use", "/terms"], ["Software licence", "/licence"]],
};
export default function Footer() {
  return <footer className="border-t border-white/10 bg-[#040611]"><Container className="py-16 lg:py-20"><div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
    <div><Logo /><p className="mt-5 max-w-sm leading-7 text-slate-400">Retail ERP, POS and business management across Windows, Cloud and Mobile.</p><Button to="/request-demo" className="mt-7">Request a demo</Button></div>
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">{Object.entries(groups).map(([title, links]) => <div key={title}><h3 className="font-bold text-white">{title}</h3><ul className="mt-5 space-y-3">{links.map(([label, path]) => <li key={`${label}-${path}`}><Link className="text-sm text-slate-400 transition hover:text-cyan-300" to={path}>{label}</Link></li>)}</ul></div>)}</div>
  </div>
  <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
    <p>Managed by FixLab © {new Date().getFullYear()} Powered by Sysygo Innovations. All rights reserved.</p>
    <p>{siteConfig.domain} · Retail moves fast. TurboCart moves faster.</p>
  </div></Container></footer>;
}
