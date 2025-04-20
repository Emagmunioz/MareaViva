import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <img src={logo} alt="Logo" className="h-10" />
      <nav className="space-x-4">
        <Link to="/login" className="text-blue-800 hover:underline">Iniciar sesión</Link>
        <Link to="/register" className="text-blue-800 hover:underline">Registrarse</Link>
      </nav>
    </header>
  );
}
