
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DerechoLaboral from "./pages/DerechoLaboral";
import DerechoDanos from "./pages/DerechoDanos";
import DerechoComercial from "./pages/DerechoComercial";
import DerechoPenal from "./pages/DerechoPenal";
import DerechoFamilia from "./pages/DerechoFamilia";
import Mediacion from "./pages/Mediacion";
import Contacto from "./pages/Contacto";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/derecho-laboral" element={<DerechoLaboral />} />
          <Route path="/derecho-danos" element={<DerechoDanos />} />
          <Route path="/derecho-comercial" element={<DerechoComercial />} />
          <Route path="/derecho-penal" element={<DerechoPenal />} />
          <Route path="/derecho-familia" element={<DerechoFamilia />} />
          <Route path="/mediacion" element={<Mediacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
