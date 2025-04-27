import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import practicasImage from "@/assets/practicas.png"; // Asegúrate que esta imagen exista

export default function VolunteersPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#D0F1FD] to-[#2980b9] min-h-screen flex flex-col font-['Poppins'] text-black">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Imagen de prácticas */}
        <img
          src={practicasImage}
          alt="Estudiante voluntario acompañando"
          className="rounded-xl shadow-lg w-full object-cover"
        />

        {/* Texto y botón */}
        <div>
          <h2 className="text-3xl font-bold text-teal-700 mb-4">
            Únete como voluntario y sé una ola de esperanza
          </h2>
          <p className="mb-4">
            ¿Estás estudiando psicología o psiquiatría?<br />
            ¿Eres un profesional con vocación, en pausa o en búsqueda activa de empleo?
          </p>
          <p className="mb-6">
            Tu formación y capacidad de escucha pueden transformar vidas.
          </p>
          <p className="mb-6">
            En Marea Viva creemos en el poder del acompañamiento emocional. Muchas personas atraviesan momentos difíciles y sólo necesitan a alguien dispuesto a escuchar. Alguien como tú.
          </p>

          <button
            onClick={() => navigate("/profile-form")}
            className="bg-[#f7b733] hover:bg-[#f6a21e] text-white font-semibold py-3 px-8 rounded-full transition shadow-md hover:shadow-lg"
          >
            Quiero ser voluntario
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
