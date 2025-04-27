import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import EmotionEvaluation from "@/pages/EmotionEvaluation";
import ChatSupport from "./pages/ChatSupport";
import ProfileForm from "@/pages/ProfileForm";
import GroupsFormPage from "@/pages/GroupsFormPage";
import VolunteersPage from "@/pages/VolunteersPage";
import FoundationsPage from "@/pages/FoundationsPage";
import ContactPage from "@/pages/ContactPage";
import SeekSupport from "@/pages/SeekSupport";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
         <Route path="/register" element={<Register />} /> 
         <Route path="/login" element={<Login />} /> 

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
        <Route path="/profesionales" element={<FoundationsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/seek-support" element={<SeekSupport />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
