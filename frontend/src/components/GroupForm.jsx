
import { useState } from "react";
// import axios from "axios"; // ❌ Comentamos la conexión

export default function GroupForm() {
  const [formData, setFormData] = useState({
    email: "",
    city: "",
    province: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulario capturado:", formData); // ✅ Simulamos el envío
    // try {
    //   const res = await axios.post("/api/groups", formData);
    //   alert("Formulario enviado correctamente");
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded border border-gray-300"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Ciudad</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="w-full px-4 py-2 rounded border border-gray-300"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Provincia</label>
        <input
          type="text"
          value={formData.province}
          onChange={(e) => setFormData({ ...formData, province: e.target.value })}
          className="w-full px-4 py-2 rounded border border-gray-300"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition"
      >
        Enviar
      </button>
    </form>
  );
}
