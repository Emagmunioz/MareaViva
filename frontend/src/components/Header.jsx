import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#2ccfcf] text-white shadow px-6 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center h-full">
          <img src={logo} alt="Logo Marea Viva" className="h-full object-contain" />
          <span className="ml-3 text-2xl font-semibold hidden sm:inline">Marea Viva</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <Link to="/" className="hover:underline">Inicio</Link>
          <a href="#como-funciona" className="hover:underline">Cómo funciona</a>
          <a href="#sobre-nosotros" className="hover:underline">Sobre Nosotros</a>
          <a href="#fundaciones" className="hover:underline">Fundaciones</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
          <Link to="/login" className="bg-white text-[#2ccfcf] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition">Iniciar sesión</Link>
          <Link to="/register" className="bg-white text-[#2ccfcf] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition">Registrarse</Link>
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 mt-4 text-sm font-medium text-center">
          <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Cómo funciona</a>
          <a href="#sobre-nosotros" onClick={() => setMenuOpen(false)}>Sobre Nosotros</a>
          <a href="#fundaciones" onClick={() => setMenuOpen(false)}>Fundaciones</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
          <Link to="/login" className="bg-white text-[#2ccfcf] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition" onClick={() => setMenuOpen(false)}>Iniciar sesión</Link>
          <Link to="/register" className="bg-white text-[#2ccfcf] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition" onClick={() => setMenuOpen(false)}>Registrarse</Link>
        </div>
      )}
    </header>
  );
}
