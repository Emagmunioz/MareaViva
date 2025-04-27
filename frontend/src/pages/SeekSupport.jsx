import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SeekSupport() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contacting, setContacting] = useState(false);
  const [filterRole, setFilterRole] = useState("voluntario"); // 🔥 Nuevo: selecciona "voluntario" o "usuario"
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/profile/all");
        if (!res.ok) {
          throw new Error("Error al obtener perfiles");
        }
        const data = await res.json();
        setProfiles(data);
      } catch (error) {
        console.error("Error al cargar los perfiles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const filteredProfiles = profiles.filter(profile => profile.role === filterRole);

  const handleContact = async (profileId) => {
    if (contacting) return;

    setContacting(true);

    try {
      const res = await fetch("http://localhost:8080/api/contact-volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ volunteerId: profileId }),
      });

      if (!res.ok) {
        throw new Error("Error al contactar");
      }

      navigate("/chat");
    } catch (error) {
      console.error("Error al contactar:", error);
      alert("Hubo un problema al contactar. Intenta de nuevo.");
    } finally {
      setContacting(false);
    }
  };

  const defaultProfileImage = "/default-profile.png";

  return (
    <div className="bg-gradient-to-b from-[#D0F1FD] to-[#2980b9] min-h-screen flex flex-col font-['Poppins'] text-black">
      <Header />

      <main className="flex-grow py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-coral-700">
          Encuentra apoyo
        </h2>

        {/* 🔥 Nuevo: Selector entre voluntarios y usuarios */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setFilterRole("voluntario")}
            className={`px-4 py-2 mx-2 rounded-full font-semibold ${
              filterRole === "voluntario"
                ? "bg-teal-500 text-white"
                : "bg-white text-teal-600 border border-teal-500"
            }`}
          >
            Voluntarios
          </button>
          <button
            onClick={() => setFilterRole("usuario")}
            className={`px-4 py-2 mx-2 rounded-full font-semibold ${
              filterRole === "usuario"
                ? "bg-teal-500 text-white"
                : "bg-white text-teal-600 border border-teal-500"
            }`}
          >
            Usuarios
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <p className="text-teal-600 text-xl font-semibold animate-pulse">Cargando perfiles...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <div
                  key={profile.id}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
                >
                  <img
                    src={profile.imageUrl ? `http://localhost:8080${profile.imageUrl}` : defaultProfileImage}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    className="w-32 h-32 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold capitalize text-teal-600">
                    {profile.firstName} {profile.lastName}
                  </h3>
                  <p className="text-gray-700 mt-2 mb-6">{profile.description}</p>
                  <button
                    onClick={() => handleContact(profile.id)}
                    disabled={contacting}
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full transition disabled:opacity-50"
                  >
                    {contacting ? "Conectando..." : "Contactar"}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center col-span-4 text-gray-500">
                No hay perfiles disponibles. ¡Vuelve más tarde!
              </p>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
