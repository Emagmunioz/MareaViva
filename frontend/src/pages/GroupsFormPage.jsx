import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GroupForm from "@/components/GroupForm";
import terapia from "@/assets/terapia.png";

export default function GroupSignupPage() {
  return (
    <div className="font-['Poppins'] text-black bg-gradient-to-b from-[#f1f4f3] to-[#c7d3d2] min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={terapia}
          alt="Sesión de grupo emocional"
          className="rounded-xl shadow-lg w-full object-cover"
        />

        <div>
          <GroupForm />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-16 text-center">
        <p>
          <strong>Gracias por tu interés en nuestras sesiones grupales.</strong><br />
          Hemos recibido tu solicitud y en breve uno de nuestros voluntarios se pondrá en contacto contigo para coordinar las fechas y horarios de las próximas reuniones. Nuestro objetivo es crear espacios seguros, empáticos y enriquecedores donde puedas compartir, escuchar y sentirte acompañado/a.
        </p>
      </div>

      <Footer />
    </div>
  );
}
