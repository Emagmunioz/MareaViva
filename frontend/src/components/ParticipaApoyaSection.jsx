export default function ParticipaApoyaSection() {
  return (
    <section className="bg-[#b2c7c5] text-center py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Participa o Apoya</h2>
      <p className="font-semibold mb-4">¿Eres fundación o universidad? Descubre cómo colaborar.</p>
      <a
        href="/presentacion-marea-viva.pdf"
        download
        className="inline-block bg-white text-[#2ccfcf] font-medium px-6 py-2 rounded-full shadow mb-8 hover:bg-gray-100"
      >
        Descargar presentación
      </a>

      <p className="font-semibold mb-4">¿Quieres apoyar económicamente?</p>

      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full px-4 py-2 rounded border border-gray-300"
        />
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="w-full px-4 py-2 rounded border border-gray-300"
        />
        <textarea
          placeholder="¿Cómo te gustaría apoyar?"
          rows="4"
          className="w-full px-4 py-2 rounded border border-gray-300"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#f7b733] hover:bg-[#e5a628] text-white font-bold py-2 rounded"
        >
          Enviar
        </button>
      </form>

      <p className="mt-10 text-m text-black max-w-xl mx-auto">
        Marea Viva es posible gracias a personas como tú. Puedes unirte como usuario, voluntario o profesional, o simplemente compartir nuestro proyecto. Cada gesto cuenta y puede transformar una vida.
      </p>
    </section>
  );
}
