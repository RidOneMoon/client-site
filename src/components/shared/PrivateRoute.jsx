import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const { user, loadingAuth } = useAuth();
  if (loadingAuth) return <div className="center">Checking authentication...</div>;
  return user ? children : <Navigate to="/login" replace />;
}
