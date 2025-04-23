import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Usuarios",
    desc: "Acceden a apoyo emocional seguro y humano de forma gratuita.",
    route: "/como-funciona",
  },
  {
    title: "Voluntarios",
    desc: "Estudiantes o profesionales en paro ofrecen escucha activa y acompañamiento.",
    route: "/voluntarios", // 👉 redirige a VolunteersPage
  },
  {
    title: "Profesionales",
    desc: "Promocionan su trabajo ayudando en una causa solidaria.",
    route: "/como-funciona",
  },
];

export default function Cards() {
  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-3xl font-semibold mb-10 text-black">Nuestra Solución</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cardData.map((card, i) => (
          <Link to={card.route} key={i} className="transition-transform hover:scale-105">
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 h-64 flex flex-col justify-center items-center border-t-4 border-[#f7b733] hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#2ccfcf]">{card.title}</h3>
              <p className="text-gray-800 text-sm">{card.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
