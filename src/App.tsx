import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";

const Home = lazy(() => import("@/pages/Home"));
const RequestDemo = lazy(() => import("@/pages/RequestDemo"));
const products = import("@/pages/ProductPages");
const content = import("@/pages/ContentPages");
const WindowsPOS = lazy(() => products.then(m => ({ default: m.WindowsPOS })));
const CloudPage = lazy(() => products.then(m => ({ default: m.CloudPage })));
const MobilePage = lazy(() => products.then(m => ({ default: m.MobilePage })));
const FeaturesPage = lazy(() => content.then(m => ({ default: m.FeaturesPage })));
const SolutionsPage = lazy(() => content.then(m => ({ default: m.SolutionsPage })));
const IndustriesPage = lazy(() => content.then(m => ({ default: m.IndustriesPage })));
const AboutPage = lazy(() => content.then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => content.then(m => ({ default: m.ContactPage })));
const SupportPage = lazy(() => content.then(m => ({ default: m.SupportPage })));
const LegalPage = lazy(() => content.then(m => ({ default: m.LegalPage })));
const NotFound = lazy(() => content.then(m => ({ default: m.NotFound })));

function PageLoader() { return <div className="grid min-h-screen place-items-center"><div className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-cyan-300" aria-label="Loading page"/></div>; }

export default function App() { return <Suspense fallback={<PageLoader/>}><Routes><Route element={<AppLayout/>}><Route index element={<Home/>}/><Route path="windows-pos" element={<WindowsPOS/>}/><Route path="cloud" element={<CloudPage/>}/><Route path="mobile" element={<MobilePage/>}/><Route path="features" element={<FeaturesPage/>}/><Route path="solutions" element={<SolutionsPage/>}/><Route path="industries" element={<IndustriesPage/>}/><Route path="about" element={<AboutPage/>}/><Route path="contact" element={<ContactPage/>}/><Route path="request-demo" element={<RequestDemo/>}/><Route path="support" element={<SupportPage/>}/><Route path="privacy-policy" element={<LegalPage type="privacy"/>}/><Route path="terms" element={<LegalPage type="terms"/>}/><Route path="licence" element={<LegalPage type="licence"/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></Suspense>; }
