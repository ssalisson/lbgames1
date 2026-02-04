import React from 'react';
import { Camera, MessageCircle, Store, ArrowRight, RefreshCw } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const TradeInSection: React.FC = () => {
  return (
    <section id="trade-in" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
         <RefreshCw className="w-96 h-96 transform rotate-12" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Sales Copy */}
            <div>
                <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm border border-yellow-400/30 px-3 py-1 rounded-full">Sistema de Trocas LB</span>
                <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6 leading-tight">
                    Seu console usado vale <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">dinheiro na mão.</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Quer um PS5 ou Switch OLED pagando menos? Seu usado entra como crédito imediato na compra.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                            <Camera className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">1. Envie foto no Zap</h4>
                            <p className="text-gray-400 text-sm">Mostre o console e acessórios para nossa equipe.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                            <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">2. Receba a Oferta</h4>
                            <p className="text-gray-400 text-sm">Analisamos e passamos um valor estimado rapidamente.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                            <Store className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">3. Troque na Loja</h4>
                            <p className="text-gray-400 text-sm">Traga para teste final e saia com seu game novo.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero negociar meu console usado na troca.`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-8 rounded-xl text-lg shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all w-full sm:w-auto"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Iniciar Avaliação Agora
                    </a>
                </div>
            </div>

            {/* Right Column: Visual */}
            <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
                <img 
                    src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Troca de Games - Controle Gamer" 
                    className="relative z-10 rounded-2xl border-2 border-gray-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default TradeInSection;