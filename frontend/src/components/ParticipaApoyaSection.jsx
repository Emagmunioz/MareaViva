import { useState } from "react";

export default function ParticipaApoyaSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [downloadMessage, setDownloadMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/collaborators", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setMessage("¡Gracias por tu interés en colaborar! 🎉 Hemos recibido tu propuesta y pronto nos pondremos en contacto contigo.");
        setForm({ name: "", email: "", description: "" });
        setSuccess(true);
      } else {
        setMessage("Hubo un problema al enviar el formulario. Por favor, inténtalo más tarde.");
        setSuccess(false);
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("No se pudo conectar con el servidor. Inténtalo más tarde.");
      setSuccess(false);
    }
  };

  const handleDownload = () => {
    window.open("https://drive.google.com/uc?export=download&id=1w1j7MafFcWzAjv8ZGtnYT80A5QAykfMo", "_blank");
    setDownloadMessage("¡Descarga iniciada!");
    setTimeout(() => {
      setDownloadMessage("");
    }, 3000);
  };

  return (
    <section className="py-8 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Participa o Apoya</h2>
        <p className="mb-4 font-semibold text-gray-700">
          ¿Eres anunciante, fundación o universidad? Descubre cómo colaborar.
        </p>

        <button
          onClick={handleDownload}
          className="bg-white text-[#2ccfcf] font-semibold py-2 px-6 rounded-full mb-4 border border-[#2ccfcf] hover:bg-[#2ccfcf] hover:text-white transition"
        >
          Descargar presentación
        </button>

        {downloadMessage && (
          <p className="text-green-600 font-semibold mb-4 animate-fadeIn">{downloadMessage}</p>
        )}

        <p className="font-semibold mb-4">¿Quieres apoyarnos?</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Tu nombre"
            className="p-3 border border-gray-300 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Tu correo electrónico"
            className="p-3 border border-gray-300 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Cuéntanos..."
            rows="4"
            className="p-3 border border-gray-300 rounded"
            value={form.description}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-[#f7b733] text-white font-semibold py-2 rounded hover:bg-[#f7a500] transition"
          >
            Enviar
          </button>
        </form>

        {message && (
          <p
            className={`mt-6 font-semibold ${
              success ? "text-green-600 animate-fadeIn" : "text-red-600 animate-fadeIn"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
