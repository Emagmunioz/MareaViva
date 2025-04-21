import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "./components/Modal";

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
      await axios.post("http://localhost:8080/api/users", data);
      setModal({
        open: true,
        message: "¡Registro completado! Serás redirigido al inicio de sesión.",
        type: "success",
      });

      // Redirige tras 2 segundos
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setModal({
        open: true,
        message: "Error al registrar. Intenta nuevamente.",
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
        <h2 className="text-xl font-semibold mb-4 text-center text-coral-700">Registro</h2>

        <input {...register("firstName", { required: "Nombre obligatorio" })} placeholder="Nombre" className="input mb-2" />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}

        <input {...register("lastName", { required: "Apellidos obligatorios" })} placeholder="Apellidos" className="input mb-2" />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}

        <input {...register("city", { required: "Ciudad obligatoria" })} placeholder="Ciudad" className="input mb-2" />
        {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}

        <input {...register("province", { required: "Provincia obligatoria" })} placeholder="Provincia" className="input mb-2" />
        {errors.province && <p className="text-red-500 text-sm">{errors.province.message}</p>}

        <input
          {...register("dni", {
            required: "DNI obligatorio",
            pattern: {
              value: /^[0-9]{8}[A-Za-z]$/,
              message: "Formato DNI incorrecto (8 números + letra)",
            },
          })}
          placeholder="DNI"
          className="input mb-2"
        />
        {errors.dni && <p className="text-red-500 text-sm">{errors.dni.message}</p>}

        <input
          type="tel"
          {...register("phone", {
            required: "Teléfono obligatorio",
            minLength: { value: 9, message: "Mínimo 9 caracteres" },
            maxLength: { value: 15, message: "Máximo 15 caracteres" },
          })}
          placeholder="Teléfono"
          className="input mb-2"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

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
          className="input mb-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input
          type="password"
          {...register("password", {
            required: "Contraseña obligatoria",
            minLength: { value: 6, message: "Mínimo 6 caracteres" },
          })}
          placeholder="Contraseña"
          className="input mb-2"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <input
          type="password"
          {...register("confirmPassword", {
            validate: value => value === watch("password") || "Las contraseñas no coinciden",
          })}
          placeholder="Repetir contraseña"
          className="input mb-4"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

        <button type="submit" className="btn-primary">Registrarse</button>
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
