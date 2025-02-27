
import React from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Phone, Mail, MapPin } from "lucide-react";

const products = [
  {
    name: "Cimento Portland",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "Cimento de alta qualidade para suas obras.",
  },
  {
    name: "Tijolos",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    description: "Tijolos resistentes e padronizados.",
  },
  {
    name: "Telhas",
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
    description: "Telhas de primeira linha para sua cobertura.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-construction-gray-light">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-construction-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Materiais de Construção de Qualidade
          </h1>
          <p className="text-xl mb-8">
            Encontre tudo que você precisa para sua obra
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-construction-gray-dark">
          Nossos Produtos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-construction-gray-dark">
            Entre em Contato
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-construction-orange" />
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-construction-orange" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">contato@construmais.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-construction-orange" />
                <div>
                  <h3 className="font-semibold text-lg">Endereço</h3>
                  <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-construction-gray-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 ConstruMais. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
