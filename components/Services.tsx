import React from 'react';
import { Cpu, Wrench, Repeat, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      title: "Troca de Console",
      subtitle: "Upgrade Facilitado",
      description: "Quer um next-gen? Use seu console parado como entrada. Melhor avaliação de Recife.",
      icon: <Repeat className="w-7 h-7" />,
      whatsappMessage: "Quero trocar meu console usado",
      buttonText: "Avaliar meu Usado",
      color: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Destrave Switch",
      subtitle: "Liberdade Total",
      description: "Desbloqueio via chip para todos os modelos de Switch (V1, V2, Lite e OLED). Sistema completo.",
      icon: <Cpu className="w-7 h-7" />,
      whatsappMessage: "Quero destravar meu Nintendo Switch",
      buttonText: "Cotar Destrave",
      color: "bg-red-600",
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Manutenção",
      subtitle: "Laboratório Próprio",
      description: "Drift, tela preta, placa ou aquecimento? Técnicos especializados em PlayStation, Xbox e Nintendo.",
      icon: <Wrench className="w-7 h-7" />,
      whatsappMessage: "Quero fazer manutenção no meu console",
      buttonText: "Agendar Conserto",
      color: "bg-green-600",
      // Updated to the specific Freepik image provided
      image: "https://img.freepik.com/fotos-premium/placa-de-circuito-de-tecnologia-da-informacao-ou-homem-consertando-hardware-eletronico-da-placa-mae-ou-semicondutor-perfil-da-industria-de-servico-de-manutencao-de-sistema-de-cpu-ou-microchip-de-reparo-de-trabalhador-de-ti-em-laboratorio-de-tecnologia_590464-152953.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm bg-blue-100 px-4 py-1 rounded-full">Soluções LB Games</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 tracking-tight">
            O que você precisa hoje?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Fale diretamente com um especialista no WhatsApp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
              
              {/* Image Area */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-all z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className={`absolute top-4 right-4 ${service.color} p-3 rounded-xl text-white shadow-lg z-20`}>
                  {service.icon}
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                   <p className="text-white/90 text-xs font-bold uppercase tracking-wider mb-1">{service.subtitle}</p>
                   <h3 className="text-2xl font-bold text-white leading-none">{service.title}</h3>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                    {service.description}
                </p>
                
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full flex items-center justify-center gap-2 ${service.color} hover:brightness-110 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md`}
                >
                  {service.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;