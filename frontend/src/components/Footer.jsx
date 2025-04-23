import React from "react";
import logo from "../assets/logo.png"; 


export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 py-6 bg-[#dbcaca] text-gray-700 text-sm">
      <img src={logo} alt="Logo Marea Viva" className="h-6" />
      <p>&copy; 2025 Marea Viva. Todos los derechos reservados.</p>
    </footer>
  );
}
