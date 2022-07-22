import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

/* LogIn Imports */
import LogIn from "./pages/LogIn";

/* Student Imports */
import StudentHome from "./pages/Students";
import ProfessorHome from "./pages/Professors";
import AdminHome from "./pages/Admin";

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LogIn />} />

          {/* Students Routes */}
          <Route path="/student" element={<StudentHome />} />
          {/* Professors Routes */}
          <Route path="/professor" element={<ProfessorHome />} />
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminHome />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
