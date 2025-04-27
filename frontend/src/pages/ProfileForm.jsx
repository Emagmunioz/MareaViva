import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import defaultProfileImage from "@/assets/Examen.png"; // Imagen por defecto si no suben ninguna

export default function ProfileForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState(""); // usuario | voluntario
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!role) {
      setMessage("Por favor, selecciona si eres Usuario o Voluntario.");
      return;
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("role", role);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:8080/api/profile", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Perfil guardado:", data);

        setMessage("¡Perfil guardado con éxito! 🎉");

        if (data.imageUrl) {
          setProfileImageUrl(data.imageUrl);
        } else {
          setProfileImageUrl(defaultProfileImage);
        }

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setMessage("Error al guardar el perfil.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#D0F1FD] to-[#2980b9] min-h-screen flex flex-col font-['Poppins'] text-black">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={profileImageUrl || defaultProfileImage}
          alt="Foto de perfil"
          className="rounded-xl shadow-lg w-full object-cover"
        />

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-coral-700">Crear Perfil</h2>

          {message && (
            <div className="text-center mb-4 p-2 rounded bg-green-100 text-green-700">
              {message}
            </div>
          )}

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

            {/* Campos nuevos de Nombre y Apellido */}
            <div>
              <label className="block mb-1 font-medium">Nombre</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Apellido</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Tu apellido"
                required
              />
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
                placeholder="Cuéntanos sobre ti..."
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
