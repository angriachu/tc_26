import { Component, type ReactNode } from "react";
import { Button, Container } from "@/components/ui";

export default class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { /* Connect production error reporting here. */ }
  render() { return this.state.failed ? <Container className="grid min-h-screen place-items-center py-24 text-center"><div><p className="text-sm font-bold uppercase tracking-widest text-cyan-300">Something went wrong</p><h1 className="mt-4 text-4xl font-extrabold">We could not display this page.</h1><p className="mt-4 text-slate-400">Please refresh or return to the TurboCart homepage.</p><Button to="/" className="mt-7">Back to TurboCart</Button></div></Container> : this.props.children; }
}
