import Header from "../components/Header";
import Section from "../components/Section";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import ParticipaApoyaSection from "../components/ParticipaApoyaSection";
import supportImage from "../assets/emotional-support.png";
import anaImage from "../assets/ana.png";
import davidImage from "../assets/david.png";

export default function Home() {
  return (
    <div className="font-['Poppins'] text-black bg-gradient-to-b from-[#f1f4f3] to-[#96b3b1] min-h-screen">
      <Header />

      {/* Sección introductoria */}
      <Section title="¿Por qué nace Marea Viva?">
        <p className="mb-6">
          Más de 280 millones de personas sufren de ansiedad o depresión. Muchas de ellas no tienen acceso a apoyo emocional. Nosotros queremos cambiar eso.
        </p>

        <div className="flex justify-center mb-10">
          <img
            src={supportImage}
            alt="Apoyo emocional en un parque"
            className="rounded-xl shadow-lg max-w-full w-[90%] md:w-[60%] object-cover"
          />
        </div>
      </Section>

      <Cards />

      <Section title="Sobre Nosotros">
        <p className="mb-4">
          Marea Viva es un proyecto impulsado por un equipo interdisciplinario que cree en el poder de la empatía y la tecnología para generar cambio social.
        </p>
        <p>
          Nuestro objetivo es facilitar el acceso a apoyo emocional, reducir el estigma y empoderar a quienes más lo necesitan.
        </p>
      </Section>

      {/* Sección Impacto Social con fondo estilizado */}
      <section className="bg-white/90 py-16 px-6 rounded-xl shadow-inner max-w-6xl mx-auto my-12">
        <h2 className="text-3xl font-semibold text-center text-teal-700 mb-10">Impacto Social</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <img src={anaImage} alt="Ana" className="mx-auto rounded-full w-32 h-32 object-cover mb-4 shadow-md" />
            <p className="italic text-lg">“Gracias a Laura, ahora duermo tranquila.”<br />– Ana, 29 años</p>
          </div>
          <div className="text-center">
            <img src={davidImage} alt="David" className="mx-auto rounded-full w-32 h-32 object-cover mb-4 shadow-md" />
            <p className="italic text-lg">“Me motivó a seguir estudiando psicología.”<br />– David, voluntario</p>
          </div>
        </div>
      </section>

      {/* Sección Participa o Apoya */}
      <ParticipaApoyaSection />

      
      <Footer />
    </div>
  );
}
