import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";

import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProjectsPage from "@/features/projects/pages/ProjectsPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Authentication */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* Projects */}
      <Route path="/projects" element={<ProjectsPage />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;