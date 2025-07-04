import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AmparosDeSalud from "./pages/AmparosDeSalud";
import Sucesiones from "./pages/Sucesiones";
import ResponsabilidadCivil from "./pages/ResponsabilidadCivil";
import ConsultoriaJuridica from "./pages/ConsultoriaJuridica";
import Contacto from "./pages/Contacto";
import DerechoFamilia from "./pages/DerechoFamilia";
import Contratos from "./pages/Contratos";
import PropiedadInmuebles from "./pages/PropiedadInmuebles";
import DerechoLaboral from "./pages/DerechoLaboral";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/amparos-de-salud" element={<AmparosDeSalud />} />
            <Route path="/sucesiones" element={<Sucesiones />} />
            <Route path="/derecho-familia" element={<DerechoFamilia />} />
            <Route path="/derecho-laboral" element={<DerechoLaboral />} />
            <Route path="/responsabilidad-civil" element={<ResponsabilidadCivil />} />
            <Route path="/consultoria-juridica" element={<ConsultoriaJuridica />} />
            <Route path="/contratos" element={<Contratos />} />
            <Route path="/propiedad-inmuebles" element={<PropiedadInmuebles />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
