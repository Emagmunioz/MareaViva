import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "@/services/api";
import Modal from "@/components/Modal";
import Header from "@/components/Header";   // ✅ Agregamos Header
import Footer from "@/components/Footer";   // ✅ Agregamos Footer

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [modal, setModal] = useState({ open: false, message: "", type: "success" });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await api.post("/auth/login", data);
      navigate("/dashboard");
    } catch (error) {
      const msg = error.response?.data?.error || "Error al iniciar sesión. Intenta nuevamente.";
      setModal({ open: true, message: msg, type: "error" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Formulario */}
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
            onClose={() => setModal({ ...modal, open: false })}
            bgColor="#DBCACA"
          />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
