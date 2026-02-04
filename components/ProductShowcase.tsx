import React from 'react';
import { MessageCircle, CheckCircle2, RefreshCw } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const products = [
  {
    id: 1,
    name: 'Nintendo Switch OLED',
    category: 'Novo',
    // Updated to specific image provided
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRnPc4zPfRawwX9PqgS8RGXNuVlaFVPUe3A&s',
    description: 'A melhor experiência portátil. Tela OLED vibrante. Disponível em Branco e Neon.',
    status: 'Pronta Entrega',
    acceptsTrade: true,
    cta: 'Ver Oferta'
  },
  {
    id: 2,
    name: 'PlayStation 5 Slim',
    category: 'Novo',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Nova geração mais compacta. Gráficos 4K e carregamento rápido.',
    status: 'Estoque Limitado',
    acceptsTrade: true,
    cta: 'Consultar Valor'
  },
  {
    id: 3,
    name: 'Xbox Series S',
    category: 'Seminovo',
    // Updated to specific image provided
    image: 'https://www.gamereactor.pt/media/64/_3256433.jpg',
    description: 'Compacto e poderoso. O melhor custo-benefício para Game Pass.',
    status: 'Revisado com Garantia',
    acceptsTrade: true,
    cta: 'Ver Preço'
  },
  {
    id: 4,
    name: 'Controle DualSense',
    category: 'Acessório',
    image: 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Cores variadas (Midnight Black, Cosmic Red). Original Sony.',
    status: 'Novo',
    acceptsTrade: false,
    cta: 'Comprar'
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Vitrine LB Games</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Consoles e Acessórios
          </h2>
          <p className="text-gray-500 mt-2">Procedência garantida.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-white relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover p-4 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  {product.category}
                </div>
                {product.acceptsTrade && (
                    <div className="absolute bottom-3 left-3 bg-yellow-400 text-blue-900 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                        <RefreshCw className="w-3 h-3" />
                        ACEITAMOS TROCA
                    </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wide">{product.status}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-2 flex-grow">
                  {product.description}
                </p>

                {/* WhatsApp CTA Button */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Tenho interesse no *${encodeURIComponent(product.name)}*. ${product.acceptsTrade ? 'Aceitam troca?' : 'Qual o valor atual?'}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-lg shadow-green-100 group-hover:shadow-green-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  {product.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria de ver o catálogo completo de jogos e consoles.`} className="inline-block text-blue-600 font-bold hover:text-blue-800 underline decoration-2 underline-offset-4">
                 Ver catálogo completo no WhatsApp &rarr;
             </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;