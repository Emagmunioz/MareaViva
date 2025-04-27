import React from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.png";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative flex flex-col items-center justify-center px-4 py-6 bg-[#dbcaca] text-gray-700 text-sm group">

      {/* 🔥 Botón Admin (oculto hasta hover) */}
      <button
        onClick={() => navigate("/admin-crud")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-full"
      >
        Admin
      </button>

      {/* Logo centrado */}
      <img src={logo} alt="Logo Marea Viva" className="h-10 sm:h-12 mb-2" />

      <p className="text-center">&copy; 2025 Marea Viva. Todos los derechos reservados.</p>
    </footer>
  );
}
