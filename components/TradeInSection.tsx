import React from 'react';
import { RefreshCcw, Camera, MessageCircle, Store, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const TradeInSection: React.FC = () => {
  const steps = [
    {
      icon: <Camera className="w-8 h-8 text-yellow-400" />,
      title: "1. Avaliação Online",
      description: "Tire fotos do seu console e jogos usados e mande no nosso WhatsApp. É rápido e sem compromisso."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-yellow-400" />,
      title: "2. Pré-Orçamento",
      description: "Receba uma estimativa de valor na hora. Usamos seu usado como parte do pagamento (crédito)."
    },
    {
      icon: <Store className="w-8 h-8 text-yellow-400" />,
      title: "3. Troca na Loja",
      description: "Traga seu game para teste final. Se aprovado, você já sai com seu console novo ou upgrade realizado!"
    }
  ];

  return (
    <section id="trade-in" className="py-24 bg-gradient-to-b from-blue-900 to-gray-900 text-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
         <RefreshCcw className="w-96 h-96 transform rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Upgrade LB Games</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6">
            Troque seu Console <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Usado</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Não deixe seu video game parado pegando poeira. Aceitamos PS4, Switch e Xbox como entrada no seu console de nova geração.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors relative group">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-800 p-4 rounded-xl shadow-lg border border-blue-700 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="pt-8 text-center">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero negociar meu console usado na troca.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all transform hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Iniciar Avaliação no WhatsApp
            <ArrowRight className="w-5 h-5 ml-1 opacity-70" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            *A avaliação final depende do estado de conservação e funcionamento do aparelho.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TradeInSection;