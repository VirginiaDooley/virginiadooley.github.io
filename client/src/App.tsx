import { useState, useEffect, useCallback } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import CV from "@/pages/CV";
import NotFound from "@/pages/not-found";
import VoterInfoAppDetail from "@/pages/VoterInfoAppDetail";

// Hash-based location hook for GitHub Pages compatibility
const hashLocation = (): [string, (to: string) => void] => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handler = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [hash.replace(/^#/, "") || "/", navigate];
};

function Router() {
  return (
    <WouterRouter hook={hashLocation}>
      <Switch>
  <Route path="/" component={Home} />
  <Route path="/cv" component={CV} />
  <Route path="/portfolio/voter-info" component={VoterInfoAppDetail} />
  <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
