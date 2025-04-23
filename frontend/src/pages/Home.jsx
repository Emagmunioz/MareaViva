import React from "react";
// ❌ Ya no necesitas Navbar
// import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/Section";
import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-['Poppins'] text-[#1a1a1a] bg-[#fefafa]">
      <Header /> {/* Header único con logo, enlaces y botones */}
      <Section title="¿Por qué nace Marea Viva?">
        Más de 280 millones de personas sufren de ansiedad o depresión. Muchas de ellas no tienen acceso a apoyo emocional. Nosotros queremos cambiar eso.
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
