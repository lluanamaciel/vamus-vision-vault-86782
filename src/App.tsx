import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Partners from "./pages/Partners";
import Team from "./pages/Team";
import News from "./pages/News";
import Careers from "./pages/Careers";
import BodyMonster from "./pages/brands/BodyMonster";
import Atacadao from "./pages/brands/Atacadao";
import FitOne from "./pages/brands/FitOne";
import BodyFitCloset from "./pages/brands/BodyFitCloset";
import VytaVerde from "./pages/brands/VytaVerde";
import Pacco from "./pages/brands/Pacco";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/parceiros" element={<Partners />} />
          <Route path="/lideranca" element={<Team />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/carreiras" element={<Careers />} />
          <Route path="/marcas/body-monster" element={<BodyMonster />} />
          <Route path="/marcas/atacadao" element={<Atacadao />} />
          <Route path="/marcas/fit-one" element={<FitOne />} />
          <Route path="/marcas/body-fit-closet" element={<BodyFitCloset />} />
          <Route path="/marcas/vyta-verde" element={<VytaVerde />} />
          <Route path="/marcas/pacco" element={<Pacco />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
