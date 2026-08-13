import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function AppLayout() {
  const { pathname } = useLocation();
  return <><ScrollToTop/><a href="#main" className="fixed left-3 top-3 z-[100] -translate-y-20 rounded-lg bg-white px-4 py-2 text-sm font-bold text-black focus:translate-y-0">Skip to content</a><Navbar /><motion.main id="main" key={pathname} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.28,ease:"easeOut"}}><Outlet /></motion.main><Footer /><WhatsAppButton/></>;
}
