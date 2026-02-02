import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  whatsappMessage: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, whatsappMessage, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={image} 
          alt={`Serviço LB Games: ${title}`} 
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-blue-900/10 transition-colors" />
        <div className="absolute top-4 right-4 bg-yellow-400 p-2 rounded-full text-blue-900 shadow-lg">
          {icon}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto group"
          aria-label={`Solicitar orçamento para ${title}`}
        >
          Solicitar Orçamento
          <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;