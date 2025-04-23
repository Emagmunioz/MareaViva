export default function ContactForm() {
    return (
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-semibold mb-6">Participa o Apoya</h2>
        <p className="mb-4 font-semibold">¿Eres fundación o universidad? Descubre cómo colaborar.</p>
        <button className="bg-white text-[#2ccfcf] font-semibold py-2 px-6 rounded-full mb-4">
          Descargar presentación
        </button>
        <p className="font-semibold mb-4">¿Quieres apoyar económicamente?</p>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Tu nombre" className="p-3 border border-gray-300 rounded" required />
          <input type="email" placeholder="Tu correo electrónico" className="p-3 border border-gray-300 rounded" required />
          <textarea placeholder="¿Cómo te gustaría apoyar?" rows="4" className="p-3 border border-gray-300 rounded" required />
          <button type="submit" className="bg-[#f7b733] text-white font-semibold py-2 rounded">Enviar</button>
        </form>
      </section>
    );
  }
  