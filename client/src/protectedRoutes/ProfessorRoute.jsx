import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProfessorRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  if (user?.rol !== "professor") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProfessorRoute;
