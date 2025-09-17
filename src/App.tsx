import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import AppLoader from "./components/AppLoader";
import { usePageVisibility } from "./hooks/usePageVisibility";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import LegoMiniCity from "./pages/LegoMiniCity";
import SpotifySingIt from "./pages/SpotifySingIt";
import MarketplaceMakers from "./pages/MarketplaceMakers";
import EyeFly from "./pages/EyeFly";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        console.log('Query retry attempt:', failureCount, error);
        return failureCount < 2;
      },
    },
  },
});

const AppContent = () => {
  const { isVisible } = usePageVisibility();
  
  console.log('App rendering, page visible:', isVisible);
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/lego-mini-city" element={<LegoMiniCity />} />
          <Route path="/portfolio/spotify-sing-it" element={<SpotifySingIt />} />
          <Route path="/portfolio/marketplace-makers" element={<MarketplaceMakers />} />
          <Route path="/portfolio/eyefly" element={<EyeFly />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const App = () => {
  console.log('App component initializing...');
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AppLoader>
            <Toaster />
            <Sonner />
            <AppContent />
          </AppLoader>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
