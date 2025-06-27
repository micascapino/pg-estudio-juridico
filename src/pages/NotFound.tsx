import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intento acceder a una ruta que no existe:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <p className="text-xl text-gray-600 mb-4">Esta pagina no existe</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Volver a la pagina principal
        </a>
      </div>
    </div>
  );
};

export default NotFound;
