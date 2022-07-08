import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Aside/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Professors from "./pages/Professors";
import Assignatures from "./pages/Assignatures";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/professors" element={<Professors />} />
          <Route path="/admin/assignatures" element={<Assignatures />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
