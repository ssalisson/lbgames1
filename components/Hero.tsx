import React from 'react';
import { ShoppingBag, Wrench, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-gray-900 text-white overflow-hidden flex flex-col justify-center min-h-[600px] lg:min-h-[calc(100vh-5rem)]">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="LB Games - Loja Gamer em Recife"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/95 to-blue-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-md mx-auto lg:mx-0 animate-fade-in-up">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-bold text-blue-100 tracking-wide uppercase">Boa Viagem, Recife - PE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Vendas, Trocas e <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Assistência Técnica
              </span>
            </h1>
            
            {/* Subheadline - Benefit Oriented - SIMPLIFIED */}
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Há 12 anos em Recife. Aceitamos seu usado como parte do pagamento.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vim pelo site e quero falar com um vendedor.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-blue-900 bg-yellow-400 hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transform hover:-translate-y-1"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Loja & Troca
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Preciso de assistência técnica para meu videogame.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-8 py-4 border-2 border-white/20 hover:border-white/50 text-base font-bold rounded-xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all transform hover:-translate-y-1"
              >
                <Wrench className="w-5 h-5 mr-2" />
                Assistência Técnica
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-400 border-t border-gray-800 mt-6">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span>Loja Física</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                 <span>+12 Anos de Mercado</span>
               </div>
            </div>
          </div>

          {/* Right Column: Visual Impact */}
          <div className="hidden lg:block relative">
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-500 bg-gray-900">
                <img 
                  src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="PlayStation 5 e Controles" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Float Card */}
                <div className="absolute bottom-6 left-6 bg-gray-900/90 backdrop-blur-md p-4 rounded-xl border border-gray-700 shadow-xl">
                   <p className="text-yellow-400 text-xs font-bold uppercase mb-1">Destaque</p>
                   <p className="text-white font-bold text-lg">Aceitamos seu Usado</p>
                   <p className="text-gray-400 text-xs">Avaliação justa na hora</p>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-10"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;