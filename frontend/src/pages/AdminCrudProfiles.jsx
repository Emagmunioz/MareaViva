import { useEffect, useState } from "react";
import api from "@/services/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdminCrudProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const res = await api.get("/profile/all");
      setProfiles(res.data);
    } catch (error) {
      console.error("Error cargando perfiles:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id, updatedProfile) => {
    try {
      await api.put(`/profile/${id}`, updatedProfile);
      alert("Perfil actualizado exitosamente.");
      fetchProfiles();
    } catch (error) {
      console.error("Error actualizando perfil:", error);
      alert("Error al actualizar perfil.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este perfil?")) {
      try {
        await api.delete(`/profile/${id}`);
        alert("Perfil eliminado.");
        fetchProfiles();
      } catch (error) {
        console.error("Error eliminando perfil:", error);
        alert("Error al eliminar perfil.");
      }
    }
  };

  if (loading) return <div className="p-6 text-center">Cargando perfiles...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-[#D0F1FD] to-[#2980b9] p-6">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">CRUD de Perfiles (Demo)</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProfileCard({ profile, onUpdate, onDelete }) {
  const [editProfile, setEditProfile] = useState(profile);

  const handleRemoveImage = () => {
    if (window.confirm("¿Seguro que deseas eliminar la imagen?")) {
      setEditProfile({ ...editProfile, imageUrl: "" });
    }
  };

  return (
    <div className="bg-[#A0E4E4] p-6 rounded-xl shadow-md">
      
      {/* 🔥 Mostrar imagen si existe */}
      {editProfile.imageUrl && (
        <div className="flex flex-col items-center mb-4">
          <img
            src={`http://localhost:8080${editProfile.imageUrl}`}
            alt="Foto de perfil"
            className="w-24 h-24 object-cover rounded-full"
          />
          <button
            onClick={handleRemoveImage}
            className="text-red-600 text-sm underline mt-2"
          >
            Eliminar imagen
          </button>
        </div>
      )}

      {/* Datos editables */}
      <input
        type="text"
        value={editProfile.firstName || ""}
        onChange={(e) => setEditProfile({ ...editProfile, firstName: e.target.value })}
        placeholder="Nombre"
        className="w-full p-2 rounded mb-2 border"
      />
      <input
        type="text"
        value={editProfile.lastName || ""}
        onChange={(e) => setEditProfile({ ...editProfile, lastName: e.target.value })}
        placeholder="Apellido"
        className="w-full p-2 rounded mb-2 border"
      />
      <textarea
        value={editProfile.description || ""}
        onChange={(e) => setEditProfile({ ...editProfile, description: e.target.value })}
        placeholder="Descripción"
        className="w-full p-2 rounded mb-4 border min-h-[80px]"
      />

      {/* Botones */}
      <div className="flex justify-between">
        <button
          onClick={() => onUpdate(profile.id, editProfile)}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
        >
          Guardar
        </button>
        <button
          onClick={() => onDelete(profile.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
        >
          Borrar
        </button>
      </div>
    </div>
  );
}
