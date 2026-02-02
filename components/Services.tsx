import React from 'react';
import { Cpu, Wrench, Repeat } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      title: "Desbloqueio Especializado",
      description: "Serviço profissional para Nintendo Switch (V1, V2, Lite e OLED). Instalação via hardware (modchip) com backup de NAND, emunand e configuração de sistema. Segurança total.",
      icon: <Cpu className="w-6 h-6" />,
      whatsappMessage: "Olá, gostaria de um orçamento para desbloqueio de Nintendo Switch.",
      image: "https://images.unsplash.com/photo-1618483254924-4f80879482da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Laboratório Técnico",
      description: "Reparo de Drift (analógicos), Reballing, troca de pasta térmica (manutenção preventiva), reparo em placa-mãe de PS5/Xbox e substituição de telas e baterias.",
      icon: <Wrench className="w-6 h-6" />,
      whatsappMessage: "Olá, preciso de assistência técnica especializada para meu aparelho.",
      image: "https://images.unsplash.com/photo-1597872258083-ef52749e480e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Venda e Upgrade",
      description: "Upgrade do seu console usado para a nova geração. Aceitamos seu PS4 ou Switch usado na troca por um novo. Venda de jogos físicos, digitais e acessórios originais.",
      icon: <Repeat className="w-6 h-6" />,
      whatsappMessage: "Olá, gostaria de saber sobre venda de jogos ou upgrade de console.",
      image: "https://images.unsplash.com/photo-1593118247619-e7d6f6d4853f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Soluções Completas</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Serviços de Alta Performance
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Utilizamos ferramentas de precisão e peças de qualidade para garantir a longevidade do seu equipamento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;