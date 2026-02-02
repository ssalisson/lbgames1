import React from 'react';
import { Gamepad2, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, ADDRESS_DISPLAY, EMAIL_CONTACT, ADDRESS_ZIP } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-yellow-400 p-1.5 rounded-lg shadow-glow">
                <Gamepad2 className="h-6 w-6 text-blue-900" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">LB Games</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Referência em assistência técnica e comércio de games em Pernambuco. Qualidade técnica e atendimento humanizado.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/l_b_games/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-800 pb-2 inline-block">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-yellow-400 mt-1 flex-shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors font-medium">
                  {WHATSAPP_DISPLAY}
                  <span className="block text-xs text-gray-500 font-normal">Atendimento via WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-yellow-400 flex-shrink-0" />
                <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-white transition-colors">{EMAIL_CONTACT}</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  {ADDRESS_DISPLAY}
                  <span className="block text-xs text-gray-500 mt-1">CEP: {ADDRESS_ZIP}</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-2">
             <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-800 pb-2 inline-block">Localização</h3>
             <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700 h-48 w-full bg-gray-800 relative">
                {/* Google Maps Embed - R. Padre Carapuceiro, 800 */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.046162383876!2d-34.9035777!3d-8.1128522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1e5a5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sR.%20Padre%20Carapuceiro%2C%20800%20-%20Boa%20Viagem%2C%20Recife%20-%20PE%2C%2051020-000!5e0!3m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de localização LB Games - Boa Viagem"
                ></iframe>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LB Games. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400">Privacidade</a>
            <a href="#" className="hover:text-gray-400">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;