import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const LoggedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user?.rol === "student") {
    return <Navigate to="/student" />;
  }
  if (user?.rol === "professor") {
    return <Navigate to="/professor" />;
  }
  if (user?.rol === "admin") {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default LoggedRoute;
