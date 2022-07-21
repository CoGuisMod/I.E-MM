import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

/* General Imports ---------- */
import Navbar from "./components/Aside/Navbar";
import Redirection from "./components/Redirection";
import Home from "./pages/Home";

/* Login Routes */
import Login from "./pages/Login";

/* Students Imports ---------- */
import Students from "./pages/Students";
import StudentsDatabase from "./pages/Students/Database";

/* Proffesors Imports ---------- */
import Professors from "./pages/Professors";

/* Assignatures Imports ---------- */
import AcademicTree from "./pages/AcademicTree";
import Grades from "./pages/AcademicTree/Grades";
import Assignatures from "./pages/AcademicTree/Assignatures";
import { GeneralContextProvider } from "./context/GeneralContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <GeneralContextProvider>
          <Navbar />
          <Routes>
            {/* General Routes */}
            <Route path="/" element={<Redirection />} />
            <Route path="/admin" element={<Home />} />

            {/* Login Routes */}
            <Route path="/login" element={<Login />} />

            {/* Students Routes */}
            <Route path="/admin/students" element={<Students />} />
            <Route
              path="/admin/students/database"
              element={<StudentsDatabase />}
            />

            {/* Professors Routes */}
            <Route path="/admin/professors" element={<Professors />} />
            <Route path="/admin/professors/database" element={<Professors />} />

            {/* Assignatures Routes */}
            <Route path="/admin/academic_tree" element={<AcademicTree />} />
            <Route
              path="/admin/academic_tree/academic_grades"
              element={<Grades />}
            />
            <Route
              path="/admin/academic_tree/assignatures"
              element={<Assignatures />}
            />
          </Routes>
        </GeneralContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
