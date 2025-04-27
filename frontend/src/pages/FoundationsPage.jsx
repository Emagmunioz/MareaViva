import { Link } from "react-router-dom"; // 🔥 Importante para navegación interna
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FoundationsPage() {
  const partners = [
    {
      name: "Proyecto Hombre",
      description: "Liderando programas de prevención y tratamiento de adicciones.",
      url: "https://proyectohombre.es/",
    },
    {
      name: "Alcohólicos Anónimos",
      description: "Una comunidad global de apoyo mutuo para superar la adicción al alcohol.",
      url: "https://www.alcoholicos-anonimos.org/v_portal/apartados/apartado.asp",
    },
    {
      name: "FEJAR",
      description: "Federación Española de Jugadores de Azar Rehabilitados.",
      url: "https://fejar.org/",
    },
    {
      name: "FEACAB",
      description: "Federación Española de Asociaciones de ayuda al Trastorno de Conducta Alimentaria.",
      url: "https://feacab.org/",
    },
    {
      name: "Teléfono de la Esperanza",
      description: "Atención inmediata y escucha activa para quien más lo necesita.",
      url: "https://telefonodelaesperanza.org/contacto",
    },
    {
      name: "Doctoralia",
      description: "Plataforma que conecta a pacientes con profesionales de la salud mental.",
      url: "https://www.doctoralia.es/",
    },
  ];

  return (
    <div className="font-['Poppins'] text-black bg-gradient-to-b from-[#D0F1FD] to-[#2980b9] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
          Colabora con Marea Viva
        </h2>
        <p className="text-center mb-10 max-w-3xl mx-auto">
          Si eres psicólogo, terapeuta o representante de una asociación, puedes formar parte de Marea Viva. Nuestra plataforma impulsa la salud emocional conectando personas que necesitan apoyo con profesionales comprometidos. Únete como colaborador o patrocinador y contribuye a una sociedad más empática y saludable. 
          Potencia tu visibilidad, participa en acciones solidarias y ayuda a transformar vidas.
        </p>

        {/* 🔥 Botón para ir a la página de contacto */}
        <div className="flex justify-center mb-12">
          <Link
            to="/contacto"
            className="bg-[#f7b733] hover:bg-[#f6a21e] text-white font-semibold py-3 px-8 rounded-full transition shadow-md hover:shadow-lg"
          >
            Quiero colaborar
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 border-t-4 border-[#f7b733] hover:shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-[#2ccfcf] mb-2">{partner.name}</h3>
              <p className="text-gray-800 text-sm">{partner.description}</p>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
