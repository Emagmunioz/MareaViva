import Header from "../components/Header";
import Footer from "../components/Footer";
import ParticipaApoyaSection from "../components/ParticipaApoyaSection";

export default function ContactPage() {
  return (
    <div className="font-['Poppins'] text-black bg-gradient-to-b from-[#f1f4f3] to-[#96b3b1] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">Contacto</h1>
        <p className="text-center mb-10">
          Si deseas colaborar con nosotros, tienes dudas o quieres saber más sobre el proyecto, estamos aquí para escucharte. Completa el formulario a continuación.
        </p>

        <ParticipaApoyaSection />
      </main>

      <Footer />
    </div>
  );
}
