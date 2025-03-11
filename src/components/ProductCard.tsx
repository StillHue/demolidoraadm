
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const ProductCard = ({ name, icon, description }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn border-0 relative group">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader className="p-0">
        <div className="bg-gradient-to-r from-construction-orange to-orange-400 p-8 flex justify-center items-center relative overflow-hidden">
          <div className="absolute -inset-1 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 relative z-10">
        <CardTitle className="text-lg mb-2 text-construction-gray-dark group-hover:text-construction-orange transition-colors duration-300">
          {name}
        </CardTitle>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
