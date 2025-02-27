
import React from "react";
import { MessageSquare } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ease-in-out hover:shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/3ee50cad-1245-4b3a-8b7d-c20a71bfa3cd.png" 
            alt="Demolidora ADM Logo" 
            className="h-16 md:h-20 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-all duration-300 ease-in-out hover:scale-105 bg-white hover:bg-gray-50 px-4 py-2 rounded-full shadow-sm hover:shadow-md"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="hidden md:inline font-medium">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
