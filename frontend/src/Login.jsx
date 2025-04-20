import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./components/Modal";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [modalData, setModalData] = useState({ show: false, message: "", type: "success" });

  const onSubmit = async (data) => {
    try {
      // Simulación de login (sustituye con llamada a backend)
      if (data.email === "test@test.com" && data.password === "123456") {
        setModalData({
          show: true,
          message: "¡Inicio de sesión exitoso!",
          type: "success",
        });
      } else {
        throw new Error("Credenciales inválidas");
      }
    } catch (error) {
      setModalData({
        show: true,
        message: error.message || "Error de autenticación.",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-100 to-rose-300 px-4">
      {modalData.show && (
        <Modal
          message={modalData.message}
          type={modalData.type}
          onClose={() => setModalData({ ...modalData, show: false })}
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar sesión</h2>

        <input
          type="email"
          {...register("email", {
            required: "Correo obligatorio",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Correo no válido",
            },
          })}
          placeholder="Correo electrónico"
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input
          type="password"
          {...register("password", {
            required: "Contraseña obligatoria",
            minLength: { value: 6, message: "Mínimo 6 caracteres" },
          })}
          placeholder="Contraseña"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}