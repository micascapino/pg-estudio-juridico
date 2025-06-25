
import { MessageSquare } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola, me gustaría recibir asesoramiento legal. ¿Podrían ayudarme?";
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-soft"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare className="h-8 w-8 mx-auto" />
    </button>
  );
};

export default WhatsAppFloat;
