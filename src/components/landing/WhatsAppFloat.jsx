import { FaWhatsapp } from 'react-icons/fa';
import { Bio } from '../../data/Contants';

export default function WhatsAppFloat() {
  return (
    <a
      href={Bio.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="WhatsApp: +91 6387854907"
      className="fixed right-6 bottom-24 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.5)] backdrop-blur-sm transition-all hover:scale-110 hover:shadow-[0_10px_36px_rgba(37,211,102,0.65)] active:scale-95"
    >
      <FaWhatsapp size={30} aria-hidden />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 [animation-duration:2.5s]" aria-hidden />
    </a>
  );
}