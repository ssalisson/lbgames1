import React from 'react';
import { ShieldCheck, Zap, UserCheck } from 'lucide-react';

const ObjectionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Dúvidas Frequentes? A gente resolve.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Objection 1: Warranty */}
            <div className="flex flex-col items-center">
                <div className="bg-green-100 p-3 rounded-full mb-4 text-green-600">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Tem garantia?</h3>
                <p className="text-sm text-gray-600">
                    Sim. Produtos e serviços com nota fiscal e garantia total da loja.
                </p>
            </div>

            {/* Objection 2: Time */}
            <div className="flex flex-col items-center">
                <div className="bg-yellow-100 p-3 rounded-full mb-4 text-yellow-600">
                    <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Demora muito?</h3>
                <p className="text-sm text-gray-600">
                    Rapidez. 90% dos orçamentos são liberados no mesmo dia.
                </p>
            </div>

            {/* Objection 3: Expertise */}
            <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4 text-blue-600">
                    <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">São especialistas?</h3>
                <p className="text-sm text-gray-600">
                    Sim. 12 anos de loja física e referência técnica em Recife.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionSection;