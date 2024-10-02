import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
