import React from "react";
import { logout } from "../services/authService.js";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirige al home "/" tras cerrar sesión
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-50 p-4">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Bienvenido al Dashboard</h1>
      <p className="text-lg text-gray-700 mb-6">Acceso autorizado con token.</p>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-[#f6a21e] hover:bg-[#e5921c] text-white rounded-lg transition"
      >
        Ir al Inicio
      </button>
    </div>
  );
}
