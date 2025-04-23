import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import axios from "axios";
import examenImage from "@/assets/Examen.png";

export default function ProfileForm() {
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("role", role);
    formData.append("description", description);
    if (image) formData.append("image", image);

    // Simulación de respuesta exitosa para pruebas locales
    setTimeout(() => {
      console.log("Perfil guardado (simulado):", {
        role,
        description,
        image: image?.name || "N/A",
      });
      navigate("/dashboard");
    }, 1000);

    // try {
    //   await axios.post("http://localhost:8080/api/profile", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    //   navigate("/dashboard");
    // } catch (error) {
    //   alert("Error al guardar el perfil");
    // }
  };

  return (
    <div className="bg-gradient-to-b from-[#f1f4f3] to-[#c7d3d2] min-h-screen flex flex-col font-['Poppins'] text-black">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <img src={examenImage} alt="Perfil" className="rounded-xl shadow-lg w-full object-cover" />

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-coral-700">Perfil de Usuario</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setRole("usuario")}
                className={`px-4 py-2 rounded-full font-semibold border ${
                  role === "usuario" ? "bg-teal-500 text-white" : "bg-white text-teal-600 border-teal-500"
                }`}
              >
                Usuario
              </button>
              <button
                type="button"
                onClick={() => setRole("voluntario")}
                className={`px-4 py-2 rounded-full font-semibold border ${
                  role === "voluntario" ? "bg-teal-500 text-white" : "bg-white text-teal-600 border-teal-500"
                }`}
              >
                Voluntario
              </button>
            </div>

            <div>
              <label className="block mb-1 font-medium">Foto de perfil</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Descripción</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded-lg min-h-[120px]"
                placeholder="Cuéntanos algo sobre ti..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-full font-semibold hover:bg-teal-600 transition"
            >
              Guardar perfil
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
