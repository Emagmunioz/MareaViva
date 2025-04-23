import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GroupForm from "@/components/GroupForm";
import terapiaImage from "@/assets/terapia.png";

export default function GroupSignupPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#f1f4f3] to-[#c7d3d2] min-h-screen text-black font-['Poppins']">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={terapiaImage} alt="Sesión de grupo" className="rounded-xl shadow-lg w-full object-cover" />
          <GroupForm />
        </div>

        <p className="mt-10 text-center text-lg">
          Gracias por tu interés en formar parte de nuestras sesiones grupales. En breve nos pondremos en contacto contigo para coordinar las fechas y detalles de las próximas reuniones. Estamos aquí para acompañarte.
        </p>
      </main>

      <Footer />
    </div>
  );
}
