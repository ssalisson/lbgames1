import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const products = [
  {
    id: 1,
    name: 'Nintendo Switch OLED',
    category: 'Consoles',
    image: 'https://www.gamereactor.pt/media/82/comparativanintendoswitch_3518203.jpg',
    description: 'Tela vibrante de 7 polegadas, áudio aprimorado e suporte ajustável. Disponível em Branco e Neon.',
    status: 'Novo e Seminovos'
  },
  {
    id: 2,
    name: 'PlayStation 5 Slim',
    category: 'Consoles',
    image: 'https://cdn.mos.cms.futurecdn.net/33KaSKG22otuqNuA9y7DBd.jpg',
    description: 'A nova geração com carregamento ultrarrápido e gráficos em 4K. Versão com e sem leitor de disco.',
    status: 'Pronta Entrega'
  },
  {
    id: 3,
    name: 'Xbox Series S',
    category: 'Consoles',
    image: 'https://www.trustedreviews.com/wp-content/uploads/sites/7/2020/10/Xbox-Series-S-24-scaled-820x461.jpg',
    description: 'O melhor custo-benefício da nova geração. Compacto, rápido e 100% digital.',
    status: 'Consulte Preço'
  },
  {
    id: 4,
    name: 'Controles & Acessórios',
    category: 'Acessórios',
    image: 'https://img.freepik.com/fotos-premium/fone-de-ouvido-vr_93675-49961.jpg',
    description: 'Joy-Cons, DualSense, Headsets e Cases. Originais e com garantia.',
    status: 'Variedade'
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Vitrine LB Games</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Produtos em Destaque
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
              
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-200 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wide">{product.status}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {product.description}
                </p>

                {/* WhatsApp CTA Button */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o *${encodeURIComponent(product.name)}* no site e gostaria de saber o preço e disponibilidade atual.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-lg shadow-green-200 group-hover:shadow-green-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar no Zap
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;