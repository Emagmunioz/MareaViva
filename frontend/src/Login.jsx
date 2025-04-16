import React from "react";
import { useForm } from "react-hook-form";
import axios from "./lib/axios";
import { saveToken } from "./lib/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/auth/login", data);
      saveToken(response.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-10 p-4 bg-white rounded shadow">
      <input {...register("email")} placeholder="Email" className="input" />
      <input type="password" {...register("password")} placeholder="Password" className="input" />
      <button type="submit" className="btn-primary">Login</button>
    </form>
  );
}