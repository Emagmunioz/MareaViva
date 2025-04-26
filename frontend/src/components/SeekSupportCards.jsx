import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SeekSupport() {
  const [profiles, setProfiles] = useState([]);
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
      }
    };

    fetchProfiles();
  }, []);

  // 🔥 Filtrar sólo los que sean voluntarios
  const volunteerProfiles = profiles.filter(profile => profile.role === "voluntario");

  const handleContact = (profileId) => {
    // Opcional: puedes hacer algo con el ID del perfil
    navigate("/chat-support");
  };

  const defaultProfileImage = "/default-profile.png";

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f1f4f3] to-[#c7d3d2] py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-coral-700">Encuentra apoyo</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {volunteerProfiles.length > 0 ? (
          volunteerProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
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
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full transition"
              >
                Contactar
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500">
            No hay voluntarios disponibles en este momento. ¡Vuelve más tarde!
          </p>
        )}
      </div>
    </section>
  );
}
