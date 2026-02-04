import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vim pelo site da LB Games e gostaria de atendimento.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:bg-green-600 hover:scale-110 transition-all duration-300 group animate-bounce-slow"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-50 animate-ping"></div>
      <MessageCircle className="w-8 h-8 relative z-10" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale Conosco Agora!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;