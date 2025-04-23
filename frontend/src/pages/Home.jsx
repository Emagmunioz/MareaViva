import Header from "../components/Header";
import Section from "../components/Section";
import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import supportImage from "../assets/emotional-support.png";


export default function Home() {
  return (
    <div className="font-['Poppins'] text-black bg-gradient-to-b from-[#f1f4f3] to-[#c7d3d2] min-h-screen">
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

      <Section title="Impacto Social">
        <p className="italic mb-2">“Gracias a Laura, ahora duermo tranquila.” – Ana, 29 años</p>
        <p className="italic">“Me motivó a seguir estudiando psicología.” – David, voluntario</p>
      </Section>

      <ContactForm />
      <Footer />
    </div>
  );
}
