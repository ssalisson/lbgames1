import React from 'react';
import { MessageCircle, ArrowRight, Star, Cpu } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-gray-900 text-white overflow-hidden flex flex-col justify-center min-h-[85vh]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Background Tech Gaming"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-blue-950/95 to-blue-900/80" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md mx-auto lg:mx-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold text-blue-200 tracking-wide uppercase">Assistência Premium em Boa Viagem</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.15]">
              A Vida Extra que <br className="hidden md:block" />
              seu Console <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Merece.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              Especialistas em reviver <strong>Nintendo Switch, PlayStation e Xbox</strong>. Do reparo de drift à microeletrônica avançada. Seu game novo, de novo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, vim pelo site e quero um orçamento!`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-blue-950 bg-yellow-400 hover:bg-yellow-300 transition-all hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                Orçamento via WhatsApp
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, tenho um console usado e gostaria de saber como funciona a troca.`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center px-8 py-4 border border-white/20 hover:border-white/40 text-base font-semibold rounded-xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Avaliar meu Usado
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400 pt-4 border-t border-gray-800/50 mt-4">
               <div className="flex items-center gap-1">
                 <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                 <span className="font-bold text-white text-base">4.6/5</span>
               </div>
               <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
               <p className="text-base">Referência em <strong className="text-gray-200">Recife/PE</strong></p>
            </div>
          </div>

          {/* Right Column: Visual Composition - Simplified */}
          <div className="relative h-full flex items-center justify-center">
            
            {/* Main Image Container with Glow */}
            <div className="relative w-full max-w-md lg:max-w-lg transform hover:scale-[1.02] transition-transform duration-700 ease-out">
              {/* Back Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-40 animate-pulse"></div>
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Nintendo Switch Neon Console" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient for Text Readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                {/* Integrated Badge inside the image context */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl flex items-center gap-3">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <Cpu className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-300 font-medium">Laboratório Especializado</p>
                      <p className="text-sm font-bold text-white">Peças Originais</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;