import React from 'react';
import { ShieldCheck, Clock, ThumbsUp, MapPin, Award, Users, Calendar, CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  // Stats added based on client conversation (12 years, thousands of clients)
  const stats = [
    { label: 'Anos de Mercado', value: '+12', icon: Calendar },
    { label: 'Avaliações Google', value: '+100', icon: Users },
    { label: 'Garantia em Serviços', value: '100%', icon: CheckCircle },
    { label: 'Nota Google', value: '4.6', icon: Award },
  ];

  const features = [
    {
      name: 'Garantia Real',
      description: 'Todos os nossos serviços e produtos seminovos acompanham garantia para sua tranquilidade.',
      icon: ShieldCheck,
    },
    {
      name: 'Agilidade no Reparo',
      description: 'Diagnóstico rápido e preciso. Sabemos que você quer voltar a jogar o quanto antes.',
      icon: Clock,
    },
    {
      name: 'Avaliação Justa',
      description: 'Pagamos bem no seu usado. Transparência total na negociação de troca.',
      icon: ThumbsUp,
    },
    {
      name: 'Localização Fácil',
      description: 'Situados na R. Padre Carapuceiro, Boa Viagem, com fácil acesso no Recife.',
      icon: MapPin,
    },
  ];

  return (
    <div className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* New Stats Section for Social Proof */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20 border-b border-gray-100 pb-16">
            {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex justify-center mb-4">
                        <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-100 transition-colors">
                            <stat.icon className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Diferenciais</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Por que escolher a LB Games?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Não somos aventureiros. Temos mais de uma década de experiência cuidando do seu divertimento com profissionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:shadow-md transition-shadow">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;