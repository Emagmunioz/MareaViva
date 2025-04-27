import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "@/services/api";
import Modal from "@/components/Modal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [modal, setModal] = useState({ open: false, message: "", type: "success", action: null });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/login", data);
      const token = response.data.token;
      localStorage.setItem("token", token);

      // Al éxito, mostrar modal con botón para volver a Home
      setModal({
        open: true,
        message: "¡Inicio de sesión exitoso!",
        type: "success",
        action: () => navigate("/") // función para redirigir a home
      });

    } catch (error) {
      const msg = error.response?.data?.message || error.response?.data || "Error al iniciar sesión. Intenta nuevamente.";
      setModal({ open: true, message: msg, type: "error", action: null });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-[#D0F1FD] to-[#2980b9] flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md border border-[#30CFC0]"
        >
          <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Iniciar sesión</h2>

          <input
            type="email"
            {...register("email", { required: "Correo obligatorio" })}
            placeholder="Correo electrónico"
            className="bg-[#A0E4E4] input mb-2"
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}

          <input
            type="password"
            {...register("password", { required: "Contraseña obligatoria" })}
            placeholder="Contraseña"
            className="bg-[#A0E4E4] input mb-4"
          />
          {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}

          <button
            type="submit"
            className="w-full bg-[#F7B733] hover:bg-[#f5a623] text-white font-semibold py-2 rounded-xl transition duration-300"
          >
            Iniciar sesión
          </button>
        </form>

        {modal.open && (
          <Modal
            message={modal.message}
            type={modal.type}
            onClose={() => {
              if (modal.action) {
                modal.action(); // 🔥 Ejecutar acción si existe
              }
              setModal({ ...modal, open: false });
            }}
            bgColor="#DBCACA"
            buttonColor="#f6a21e" // 🔥 Cambiamos el color del botón
            buttonText="Ir a Inicio" // 🔥 Texto personalizado
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
