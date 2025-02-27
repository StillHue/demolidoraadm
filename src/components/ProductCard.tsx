
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
}

const ProductCard = ({ name, image, description }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn">
      <CardHeader className="p-0">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
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
