import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./Register";
// import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import EmotionEvaluation from "@/pages/EmotionEvaluation";
import ChatSupport from "./pages/ChatSupport";
import ProfileForm from "@/pages/ProfileForm";
import GroupsFormPage from "@/pages/GroupsFormPage";
import VolunteersPage from "@/pages/VolunteersPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Estas rutas están comentadas hasta que vuelvas a agregar los archivos */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}

        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Home />} />
        <Route path="/como-funciona" element={<HowItWorks />} />
        <Route path="/profile-form" element={<ProfileForm />} />
        <Route path="/cuestionario" element={<EmotionEvaluation />} />
        <Route path="/groups-form" element={<GroupsFormPage />} />
        <Route path="/chat" element={<ChatSupport />} />
        <Route path="/voluntarios" element={<VolunteersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
