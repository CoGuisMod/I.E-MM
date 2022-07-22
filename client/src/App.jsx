import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Context Imports */
import { AuthContextProvider } from "./context/AuthContext";
import { GeneralContextProvider } from "./context/GeneralContext";

import Navbar from "./components/Aside/Navbar";

/* LogIn Imports -------------------- */
import LogIn from "./pages/LogIn";

/* Student Imports -------------------- */
import StudentHome from "./pages/Students";

/* Profesor Imports -------------------- */
import ProfessorHome from "./pages/Professors";

/* Admin Imports -------------------- */
import AdminHome from "./pages/Admin";

/* Admin - Students Imports */
import StudentsAdminHome from "./pages/Admin/Students";
import StudentsFormAdmin from "./pages/Admin/Students/Form";
import StudentsDatabaseAdmin from "./pages/admin/Students/Database";

/* Admin - Professor Imports */
import ProfessorsAdminHome from "./pages/Admin/Professors";
import ProfessorsDatabaseAdmin from "./pages/admin/Professors/Database";

/* Admin - Academic Tree Imports */
import AcademicTreeHome from "./pages/admin/AcademicTree";
import AcademicTreeGrades from "./pages/admin/AcademicTree/Grades";
import AcademicTreeAssignatures from "./pages/admin/AcademicTree/Assignatures";

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <GeneralContextProvider>
          <Navbar />
          <Routes>
            {/* LogIn Route -------------------- */}
            <Route path="/" element={<LogIn />} />

            {/* Students Routes -------------------- */}
            <Route path="/student" element={<StudentHome />} />

            {/* Professors Routes -------------------- */}
            <Route path="/professor" element={<ProfessorHome />} />

            {/* Admin Routes -------------------- */}
            <Route path="/admin" element={<AdminHome />} />

            {/* Admin - Students Routes */}
            <Route path="/admin/students" element={<StudentsAdminHome />} />
            <Route
              path="/admin/students/form"
              element={<StudentsFormAdmin />}
            />
            <Route
              path="/admin/students/database"
              element={<StudentsDatabaseAdmin />}
            />

            {/* Admin - Professors Routes */}
            <Route path="/admin/professors" element={<ProfessorsAdminHome />} />
            <Route
              path="/admin/professors/database"
              element={<ProfessorsDatabaseAdmin />}
            />

            {/* Admin - Academic Tree Routes */}
            <Route path="/admin/academic_tree" element={<AcademicTreeHome />} />
            <Route
              path="/admin/academic_tree/grades"
              element={<AcademicTreeGrades />}
            />
            <Route
              path="/admin/academic_tree/assignatures"
              element={<AcademicTreeAssignatures />}
            />
          </Routes>
        </GeneralContextProvider>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
