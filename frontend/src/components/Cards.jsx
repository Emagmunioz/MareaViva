const cardData = [
    {
      title: "Usuarios",
      desc: "Acceden a apoyo emocional seguro y humano de forma gratuita.",
    },
    {
      title: "Voluntarios",
      desc: "Estudiantes o profesionales en paro ofrecen escucha activa y acompañamiento.",
    },
    {
      title: "Profesionales",
      desc: "Promocionan su trabajo ayudando en una causa solidaria.",
    },
  ];
  
  export default function Cards() {
    return (
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-semibold mb-10">Nuestra Solución</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cardData.map((card, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border-t-4 border-[#f7b733]">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  