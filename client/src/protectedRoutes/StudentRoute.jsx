import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const StudentRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  if (user?.rol !== "estudiante") {
    return <Navigate to="/" />;
  }

  return children;
};

export default StudentRoute;
