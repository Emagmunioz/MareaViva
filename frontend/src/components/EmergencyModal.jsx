import { Link } from "react-router-dom";

export default function EmergencyModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Estamos contigo</h2>
        <p className="mb-4">
          Hemos detectado que podrías estar atravesando un momento difícil. Uno de nuestros voluntarios será notificado para apoyarte lo antes posible.
        </p>
        <p className="mb-6">
          Mientras tanto, puedes acceder al chat directo para conversar con alguien ahora mismo.
        </p>
        <Link
          to="/chat"
          className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          Ir al Chat de Apoyo
        </Link>
        <button
          onClick={onClose}
          className="block mx-auto mt-4 text-sm text-gray-500 hover:underline"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}