import { useState } from "react";

export default function ParticipaApoyaSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [message, setMessage] = useState("");

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
        setMessage("¡Gracias por tu interés en colaborar! ✨");
        setForm({ name: "", email: "", description: "" });
      } else {
        setMessage("Hubo un problema al enviar el formulario.");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("No se pudo conectar con el servidor.");
    }
  };

  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-3xl font-semibold mb-6">Participa o Apoya</h2>
      <p className="mb-4 font-semibold">¿Eres fundación o universidad? Descubre cómo colaborar.</p>
      <button className="bg-white text-[#2ccfcf] font-semibold py-2 px-6 rounded-full mb-4">
        Descargar presentación
      </button>
      <p className="font-semibold mb-4">¿Quieres apoyar económicamente?</p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
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
          placeholder="¿Cómo te gustaría apoyar?"
          rows="4"
          className="p-3 border border-gray-300 rounded"
          value={form.description}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-[#f7b733] text-white font-semibold py-2 rounded">
          Enviar
        </button>
      </form>
      {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
    </section>
  );
}
