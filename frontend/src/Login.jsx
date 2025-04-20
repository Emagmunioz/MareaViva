import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "./services/authService";
import Modal from "./components/Modal";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [modal, setModal] = useState({ open: false, message: "", type: "success" });

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      setModal({
        open: true,
        message: "Correo o contraseña incorrectos.",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-100 to-orange-200 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4 text-center text-coral-700">Iniciar sesión</h2>

        <input
          type="email"
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Formato de correo inválido",
            },
          })}
          placeholder="Correo electrónico"
          className="input mb-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input
          type="password"
          {...register("password", {
            required: "La contraseña es obligatoria",
          })}
          placeholder="Contraseña"
          className="input mb-4"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <button type="submit" className="w-full bg-coral-500 text-white py-2 rounded hover:bg-coral-600">
          Iniciar sesión
        </button>
      </form>

      {modal.open && (
        <Modal
          message={modal.message}
          type={modal.type}
          onClose={() => setModal({ ...modal, open: false })}
        />
      )}
    </div>
  );
}
