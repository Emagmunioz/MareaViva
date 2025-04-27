import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import rotulo from "../assets/RotuloMareaViva.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#2ccfcf] text-white shadow px-0 py-2">
      <div className="flex items-center justify-between h-24 px-4 md:px-6">
        {/* Logo pegado totalmente a la izquierda */}
        <div className="flex items-center h-full gap-2 flex-shrink-0">
          <img 
            src={logo} 
            alt="Logo Marea Viva" 
            className="h-16 sm:h-14 md:h-16 object-contain" 
          />
          <img 
            src={rotulo} 
            alt="Rótulo Marea Viva" 
            className="h-10 sm:h-8 md:h-10 object-contain hidden sm:block" 
          />
        </div>

        {/* Menú máximo ancho */}
        <div className="flex-1 flex justify-end">
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
            <Link to="/home" className="hover:underline">Inicio</Link>
            <Link to="/how-it-works" className="hover:underline">Cómo funciona</Link>
            <Link to="/volunteers" className="hover:underline">Voluntarios</Link>
            <Link to="/foundations" className="hover:underline">Profesionales</Link>
            <Link to="/contact" className="hover:underline">Contacto</Link>
            <Link 
              to="/login" 
              className="bg-white text-[#2ccfcf] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Iniciar sesión
            </Link>
            <Link 
              to="/register" 
              className="bg-white text-[#2ccfcf] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Registrarse
            </Link>
          </nav>

          {/* Botón hamburguesa (mobile) */}
          <button
            className="md:hidden flex items-center text-white focus:outline-none ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 mt-4 text-sm font-medium text-center">
          <Link to="/home" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/how-it-works" onClick={() => setMenuOpen(false)}>Cómo funciona</Link>
          <Link to="/volunteers" onClick={() => setMenuOpen(false)}>Voluntarios</Link>
          <Link to="/foundations" onClick={() => setMenuOpen(false)}>Profesionales</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
          <Link 
            to="/login" 
            className="bg-white text-[#2ccfcf] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition" 
            onClick={() => setMenuOpen(false)}
          >
            Iniciar sesión
          </Link>
          <Link 
            to="/register" 
            className="bg-white text-[#2ccfcf] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition" 
            onClick={() => setMenuOpen(false)}
          >
            Registrarse
          </Link>
        </div>
      )}
    </header>
  );
}
