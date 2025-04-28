import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import AdminCrudProfiles from "@/pages/AdminCrudProfiles";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        
        <Route path="/" element={<Navigate to="/home" />} />

       
        <Route path="/home" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/volunteers" element={<VolunteersPage />} />
        <Route path="/foundations" element={<FoundationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile-form" element={<ProfileForm />} />
        <Route path="/cuestionario" element={<EmotionEvaluation />} />
        <Route path="/groups-form" element={<GroupsFormPage />} />
        <Route path="/chat" element={<ChatSupport />} />
        <Route path="/seek-support" element={<SeekSupport />} />
        <Route path="/admin-crud" element={<AdminCrudProfiles />} />
        
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />

       
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}
