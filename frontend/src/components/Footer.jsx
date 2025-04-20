import React from "react";
import logo from "/logo.png";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center px-4 py-6 bg-white border-t mt-auto">
      <img src={logo} alt="Logo" className="h-6 mr-2" />
      <p className="text-sm text-gray-600">&copy; 2025 Marea Viva. Todos los derechos reservados.</p>
    </footer>
  );
}
