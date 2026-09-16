import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349114301414?text=Hello%20Aiglink%2C%20I%20would%20like%20to%20make%20an%20inquiry."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Aiglink on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
      <FaWhatsapp size={30} />
    </a>
  );
}

export default WhatsAppButton;