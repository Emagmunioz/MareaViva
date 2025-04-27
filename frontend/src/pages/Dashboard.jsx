import React from "react";
import { logout } from "../services/authService.js";

export default function Dashboard() {
  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-50 p-4">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Bienvenido al Dashboard</h1>
      <p className="text-lg text-gray-700 mb-6">Acceso autorizado con token.</p>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Cerrar sesión
      </button>
    </div>
  );
}