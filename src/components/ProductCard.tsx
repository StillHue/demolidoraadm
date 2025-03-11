
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const ProductCard = ({ name, icon, description }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn border-0">
      <CardHeader className="p-0">
        <div className="bg-gradient-to-r from-construction-orange to-orange-400 p-8 flex justify-center items-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2 text-construction-gray-dark">
          {name}
        </CardTitle>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
