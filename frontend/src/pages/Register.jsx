import React, { useState } from "react";
import { useForm } from "react-hook-form"; // <-- 🔥 Aquí
import { useNavigate } from "react-router-dom";
import api from "@/services/api";
import Modal from "@/components/Modal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [modal, setModal] = useState({ open: false, message: "", type: "success" });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await api.post("/auth/register", data);
      setModal({
        open: true,
        message: "¡Registro exitoso! Redirigiendo al login...",
        type: "success",
      });
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      const msg = error.response?.data?.error || "Error al registrar. Intenta nuevamente.";
      setModal({ open: true, message: msg, type: "error" });
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
          <h2 className="text-xl font-bold mb-4 text-center text-[#30CFC0]">Registro</h2>

          <input {...register("firstName", { required: "Nombre obligatorio" })} placeholder="Nombre" className="bg-[#A0E4E4] input mb-2" />
          {errors.firstName && <p className="text-[#DBBABA] text-sm">{errors.firstName.message}</p>}

          <input {...register("lastName", { required: "Apellidos obligatorios" })} placeholder="Apellidos" className="bg-[#A0E4E4] input mb-2" />
          {errors.lastName && <p className="text-[#DBBABA] text-sm">{errors.lastName.message}</p>}

          <input {...register("city", { required: "Ciudad obligatoria" })} placeholder="Ciudad" className="bg-[#A0E4E4] input mb-2" />
          <input {...register("province", { required: "Provincia obligatoria" })} placeholder="Provincia" className="bg-[#A0E4E4] input mb-2" />

          <input
            {...register("dni", {
              required: "DNI obligatorio",
              pattern: {
                value: /^[0-9]{8}[A-Za-z]$/,
                message: "Formato DNI incorrecto (8 números + letra)",
              },
            })}
            placeholder="DNI"
            className="bg-[#A0E4E4] input mb-2"
          />

          <input
            type="tel"
            {...register("phone", {
              required: "Teléfono obligatorio",
              minLength: { value: 9, message: "Mínimo 9 caracteres" },
              maxLength: { value: 15, message: "Máximo 15 caracteres" },
            })}
            placeholder="Teléfono"
            className="bg-[#A0E4E4] input mb-2"
          />

          <input
            type="email"
            {...register("email", {
              required: "Correo obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Formato de correo inválido",
              },
            })}
            placeholder="Correo electrónico"
            className="bg-[#A0E4E4] input mb-2"
          />

          <input
            type="password"
            {...register("password", {
              required: "Contraseña obligatoria",
              minLength: { value: 6, message: "Mínimo 6 caracteres" },
            })}
            placeholder="Contraseña"
            className="bg-[#A0E4E4] input mb-2"
          />

          <input
            type="password"
            {...register("confirmPassword", {
              validate: value => value === watch("password") || "Las contraseñas no coinciden",
            })}
            placeholder="Repetir contraseña"
            className="bg-[#A0E4E4] input mb-4"
          />
          {errors.confirmPassword && <p className="text-[#DBBABA] text-sm">{errors.confirmPassword.message}</p>}

          {/* 🚀 Selección de rol */}
          <select {...register("role", { required: "Selecciona un rol" })} className="bg-[#A0E4E4] p-2 rounded mb-4 w-full">
            <option value="">Selecciona tu rol</option>
            <option value="usuario">Usuario</option>
            <option value="voluntario">Voluntario</option>
            <option value="colaborador">Colaborador / Anunciante</option>
          </select>
          {errors.role && <p className="text-[#DBBABA] text-sm">{errors.role.message}</p>}

          <button
            type="submit"
            className="w-full bg-[#F7B733] hover:bg-[#f5a623] text-white font-semibold py-2 rounded-xl transition duration-300"
          >
            Registrarse
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

      <Footer />
    </div>
  );
}
