
import React from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Phone, Mail, MapPin, Hammer, Home, Truck } from "lucide-react";

const products = [
  {
    name: "Demolição Controlada",
    icon: <Hammer className="w-12 h-12 text-white" />,
    description: "Serviços de demolição controlada com equipamentos modernos.",
  },
  {
    name: "Pequenas Reformas",
    icon: <Home className="w-12 h-12 text-white" />,
    description: "Reformas residenciais e pequenas demolições acessíveis.",
  },
  {
    name: "Remoção de Entulho",
    icon: <Truck className="w-12 h-12 text-white" />,
    description: "Remoção e descarte adequado de resíduos de demolição.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-construction-gray-light">
      <Header />
      
      {/* Hero Section with Gradient and Blur Effect */}
      <section className="bg-gradient-to-r from-construction-orange to-orange-400 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Demolidora ADM
          </h1>
          <p className="text-xl mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Experiência e segurança em serviços de demolição
          </p>
        </div>
      </section>

      {/* Products Section with Fade Effect */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-construction-gray-dark animate-fadeIn" 
            style={{ animationDelay: "0.3s" }}>
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.name} className="animate-fadeIn" 
                 style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section with Gradient and Blur Effect */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16 relative">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-construction-gray-dark animate-fadeIn"
              style={{ animationDelay: "0.6s" }}>
            Entre em Contato
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4 animate-fadeIn" style={{ animationDelay: "0.7s" }}>
                <div className="bg-gradient-to-r from-construction-orange to-orange-400 p-3 rounded-full shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-fadeIn" style={{ animationDelay: "0.8s" }}>
                <div className="bg-gradient-to-r from-construction-orange to-orange-400 p-3 rounded-full shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">contato@demolidoraadm.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-fadeIn" style={{ animationDelay: "0.9s" }}>
                <div className="bg-gradient-to-r from-construction-orange to-orange-400 p-3 rounded-full shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Endereço</h3>
                  <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Gradient and Blur Effect */}
      <footer className="bg-gradient-to-r from-construction-gray-dark to-gray-700 text-white py-8 relative">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="animate-fadeIn" style={{ animationDelay: "1s" }}>© 2025 Demolidora ADM. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
