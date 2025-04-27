import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyModal from "@/components/EmergencyModal";
import apoyoImage from "@/assets/DibujoMarea.png";


export default function EmotionEvaluation() {
  const [showModal, setShowModal] = useState(false);
  const [thoughts, setThoughts] = useState("");
  const [support, setSupport] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (thoughts === "Con frecuencia" || thoughts === "Sí, en este momento" || support === "No") {
      setShowModal(true);
    } else {
      alert("Evaluación enviada correctamente.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-['Poppins'] text-black bg-gradient-to-b from-[#D0F1FD] to-[#2980b9]">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={apoyoImage}
          alt="Apoyo emocional"
          className="rounded-xl shadow-lg w-full object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold text-center text-orange-500 mb-8">
            Evaluación Emocional
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">¿Cómo te sientes hoy?</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 mt-1">
                <option>Selecciona una opción</option>
                <option>Bien</option>
                <option>Ansioso/a</option>
                <option>Triste</option>
                <option>Desmotivado/a</option>
              </select>
            </div>

            <div>
              <label className="font-medium">¿Qué te ha traído a Marea Viva?</label>
              <textarea
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                rows="3"
                placeholder="Comparte lo que quieras contarnos..."
              />
            </div>

            <div>
              <label className="font-medium">¿Con qué frecuencia te gustaría tener apoyo?</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 mt-1">
                <option>Selecciona una opción</option>
                <option>Una vez por semana</option>
                <option>Varias veces por semana</option>
                <option>Sólo cuando lo necesite</option>
              </select>
            </div>

            <div>
              <label className="font-medium">¿Tienes energía suficiente para tus actividades diarias?</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 mt-1">
                <option>Selecciona una opción</option>
                <option>Sí</option>
                <option>A veces</option>
                <option>No</option>
              </select>
            </div>

            <div>
              <label className="font-medium">¿Cómo están siendo tus patrones de sueño?</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 mt-1">
                <option>Selecciona una opción</option>
                <option>Duermo bien</option>
                <option>Me cuesta dormir</option>
                <option>Tengo insomnio o pesadillas</option>
              </select>
            </div>

            <div>
              <label className="font-medium">¿Has tenido pensamientos de hacerte daño o rendirte?</label>
              <select
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
              >
                <option>Selecciona una opción</option>
                <option>No</option>
                <option>A veces</option>
                <option>Con frecuencia</option>
                <option>Sí, en este momento</option>
              </select>
            </div>

            <div>
              <label className="font-medium">¿Tienes alguien con quien hablar regularmente sobre tus emociones?</label>
              <select
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
                value={support}
                onChange={(e) => setSupport(e.target.value)}
              >
                <option>Selecciona una opción</option>
                <option>Sí</option>
                <option>No</option>
                <option>No estoy seguro/a</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded transition"
            >
              Enviar evaluación
            </button>
          </form>
        </div>
      </main>

      <Footer />
      {showModal && <EmergencyModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
