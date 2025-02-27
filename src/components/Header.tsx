
import React from "react";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/fee8d349-2304-4f29-a0f7-61f97b359169.png" 
            alt="Demolidora ADM Logo" 
            className="h-12"
          />
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+5511999999999" className="flex items-center gap-2 text-construction-orange hover:text-construction-gray-dark transition-colors">
            <Phone className="w-5 h-5" />
            <span className="hidden md:inline">(11) 99999-9999</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
