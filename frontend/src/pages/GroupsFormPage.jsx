import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticipaApoyaSection from "@/components/ParticipaApoyaSection";
import terapia from "@/assets/terapia.png";

export default function GroupsFormPage() {
  return (
    <div className="font-['Poppins'] text-black bg-gradient-to-b from-[#D0F1FD] to-[#2980b9] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto py-12 px-4 flex flex-col gap-12">
        {/* 🔥 Título y descripción centrados */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">
            Únete a nuestras sesiones grupales
          </h2>
          <p className="text-gray-700">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo para coordinar las próximas reuniones de apoyo emocional en grupo.
          </p>
        </div>

        {/* 🔥 Grid para la imagen + formulario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={terapia}
            alt="Sesión de grupo emocional"
            className="rounded-xl shadow-lg w-full object-cover"
          />

          <div>
            <ParticipaApoyaSection />
          </div>
        </div>
      </main>

      {/* 🔥 Mensaje final, ya estaba bien */}
      <section className="max-w-3xl mx-auto px-4 pb-16 text-center text-gray-700">
        <p>
          <strong>Gracias por tu interés en nuestras sesiones grupales.</strong><br />
          En breve un miembro de Marea Viva se comunicará contigo para organizar las fechas y horarios. 
          Queremos ofrecerte un espacio seguro, empático y enriquecedor donde puedas compartir y sentirte acompañado/a.
        </p>
      </section>

      <Footer />
    </div>
  );
}
