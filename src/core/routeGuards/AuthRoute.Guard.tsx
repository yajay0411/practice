import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";

const AuthRoute: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    // If authenticated, redirect to home page
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If not authenticated, render the child routes (e.g., login/register)
  return <Outlet />;
};

export default AuthRoute;
