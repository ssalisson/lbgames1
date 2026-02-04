import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              {/* Replaced Icon with Logo Image - Using JPG version for stability */}
              <img 
                src="https://i.ibb.co/DPb3xyFC/LOGOTIO.jpg" 
                alt="LB Games Logo" 
                className="h-14 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300 rounded-md"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight leading-none">LB Games</span>
                <span className="text-xs text-blue-200 font-medium tracking-wide">Loja & Assistência</span>
              </div>
            </div>
          </div>

          {/* Call to Action - Focus on WhatsApp */}
          <div>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-5 py-3 rounded-lg text-base font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Chamar no Zap</span>
              <span className="sm:hidden">Zap</span>
            </a>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;