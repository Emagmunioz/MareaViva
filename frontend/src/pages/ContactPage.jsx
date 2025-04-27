import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticipaApoyaSection from "../components/ParticipaApoyaSection";

export default function ContactPage() {
  return (
    <div className="font-['Poppins'] text-black bg-gradient-to-b from-[#D0F1FD] to-[#2980b9] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-6 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-4">Colabora con Marea Viva</h1>

        <p className="text-center mb-4 text-lg">
          ¿Quieres ser parte de nuestra red de apoyo emocional? <br />
          Completa el formulario a continuación y nos pondremos en contacto contigo.
        </p>

        {/* Nuevo párrafo breve para suavizar la transición */}
        <p className="text-center mb-8 text-base text-gray-700">
          Buscamos crear una comunidad donde el bienestar emocional sea una prioridad. 
          Tu apoyo es fundamental para expandir esta red solidaria.
        </p>

        <ParticipaApoyaSection />

        {/* 🔥 Texto pequeñito abajo */}
        <div className="mt-10 text-center text-sm text-black">
          ¿Ya tienes un perfil creado y deseas <span className="font-semibold text-black">modificar</span> o <span className="font-semibold text-black">eliminar</span> tus datos? <br />
          Por favor escribe a{" "}
          <a
            href="mailto:emagmunioz@gmail.com"
            className="text-teal-600 font-medium underline hover:text-black"
          >
            emagmunioz@gmail.com
          </a>{" "}
          y te ayudaremos.
        </div>
      </main>

      <Footer />
    </div>
  );
}
