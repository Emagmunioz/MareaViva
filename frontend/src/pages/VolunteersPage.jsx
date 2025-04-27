import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import practicas from "@/assets/practicas.png"; // Asegúrate que esté bien importado

export default function VolunteersPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-[#D0F1FD] to-[#2980b9] flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2 max-w-6xl w-full">

          {/* Columna Izquierda: Imagen */}
          <div className="flex items-center justify-center bg-[#A0E4E4] p-6">
            <img
              src={practicas}
              alt="Prácticas de Voluntariado"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Columna Derecha: Texto + Botón */}
          <div className="flex flex-col justify-center items-center p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              ¡Únete a nuestra red de voluntarios!
            </h1>

            <p className="text-gray-700 mb-8 text-center">
              Si eres estudiante, jubilado o desempleado en Psicología o Psiquiatría,
              tienes la oportunidad de marcar una diferencia real en la vida de las personas. 💙
              <br /><br />
              ¡Participa en nuestra comunidad de apoyo y crecimiento!
            </p>

            <button
              onClick={() => navigate("/profile-form")}
              className="bg-[#2ccfcf] hover:bg-[#26b0b0] text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Quiero ser voluntario
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
