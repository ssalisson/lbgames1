import React from 'react';
import { ShieldCheck, Clock, ThumbsUp, MapPin, BadgeCheck, Trophy, Users } from 'lucide-react';

const Features: React.FC = () => {
  // Trust Bar Stats - Social Proof
  const stats = [
    { label: 'Anos de História', value: '12+', icon: Clock },
    { label: 'Clientes Atendidos', value: 'Milhares', icon: Users },
    { label: 'Garantia', value: 'Total', icon: BadgeCheck },
    { label: 'Avaliação', value: 'Top', icon: Trophy },
  ];

  const features = [
    {
      name: 'Garantia Real',
      description: 'Produtos novos, seminovos e serviços com nota fiscal e garantia total da loja.',
      icon: ShieldCheck,
    },
    {
      name: 'Valorizamos seu Usado',
      description: 'Use seu console antigo como parte do pagamento. Avaliação justa para facilitar seu upgrade.',
      icon: ThumbsUp,
    },
    {
      name: 'Laboratório Próprio',
      description: 'Sem terceirização. Técnicos especializados na loja para um serviço rápido e seguro.',
      icon: Clock,
    },
    {
      name: 'Fácil Acesso',
      description: 'Localizados na R. Padre Carapuceiro, coração de Boa Viagem. Estacionamento fácil.',
      icon: MapPin,
    },
  ];

  return (
    <div className="bg-white">
      {/* Trust Bar Section */}
      <div className="bg-blue-600 text-white py-12 -mt-1 relative z-20 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-500/50">
                  {stats.map((stat, index) => (
                      <div key={index} className="flex flex-col items-center p-2">
                          <stat.icon className="w-8 h-8 text-yellow-400 mb-3 opacity-90" />
                          <span className="text-3xl md:text-4xl font-black tracking-tight">{stat.value}</span>
                          <span className="text-xs md:text-sm font-medium text-blue-100 uppercase tracking-wider mt-1">{stat.label}</span>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Main Features Grid */}
      <div className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Por que a LB Games?</h2>
            <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Segurança e Tradição
            </p>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
                <div key={feature.name} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full flex flex-col items-center text-center">
                        <span className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-full ring-4 ring-white mb-5 group-hover:scale-110 transition-transform">
                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <h3 className="text-lg font-bold text-gray-900">{feature.name}</h3>
                        <p className="mt-3 text-base text-gray-500 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Features;