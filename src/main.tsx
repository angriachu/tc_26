import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import "./index.css";

createRoot(document.getElementById("root")!).render(<StrictMode><ErrorBoundary><HelmetProvider><BrowserRouter basename={import.meta.env.BASE_URL}><App/></BrowserRouter></HelmetProvider></ErrorBoundary></StrictMode>);
