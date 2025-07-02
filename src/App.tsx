
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AmparosDeSalud from "./pages/AmparosDeSalud";
import Sucesiones from "./pages/Sucesiones";
import ResponsabilidadCivil from "./pages/ResponsabilidadCivil";
import ConsultoriaJuridica from "./pages/ConsultoriaJuridica";
import Contacto from "./pages/Contacto";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/amparos-de-salud" element={<AmparosDeSalud />} />
          <Route path="/sucesiones" element={<Sucesiones />} />
          <Route path="/responsabilidad-civil" element={<ResponsabilidadCivil />} />
          <Route path="/consultoria-juridica" element={<ConsultoriaJuridica />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
