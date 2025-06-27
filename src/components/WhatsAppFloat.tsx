const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola, me gustaría recibir asesoramiento legal. ¿Podrían ayudarme?";
    const whatsappUrl = `https://wa.me/5492234373938?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
      type="button"
    >
      <img src="/icons/whatsapp-icon.svg" alt="WhatsApp" className="h-8 w-8 mx-auto" />
    </button>
  );
}

export default WhatsAppFloat;
