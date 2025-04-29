
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="bg-gradient-to-b from-[#D0F1FD] to-[#2980b9] min-h-screen flex flex-col font-['Poppins'] text-black">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold text-coral-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
        <p className="text-gray-700 mb-6">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>

        <Link
          to="/"
          className="bg-teal-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-600 transition"
        >
          Volver al inicio
        </Link>
      </main>

      <Footer />
    </div>
  );
}
