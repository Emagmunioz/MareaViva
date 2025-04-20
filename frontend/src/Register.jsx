import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/api/users/register", data);
      alert("User registered successfully!");
    } catch (error) {
      alert("Registration failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <input {...register("firstName", { required: true })} placeholder="First Name" className="input" />
      {errors.firstName && <p className="text-red-500">First name is required</p>}

      <input {...register("lastName", { required: true })} placeholder="Last Name" className="input" />
      {errors.lastName && <p className="text-red-500">Last name is required</p>}

      <input type="email" {...register("email", { required: true })} placeholder="Email" className="input" />
      {errors.email && <p className="text-red-500">Email is required</p>}

      <input type="password" {...register("password", { required: true })} placeholder="Password" className="input" />
      {errors.password && <p className="text-red-500">Password is required</p>}

      <button type="submit" className="btn-primary">Register</button>
    </form>
  );
}