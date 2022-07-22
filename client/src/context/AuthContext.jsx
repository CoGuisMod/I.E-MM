/* Context Imports */
import { createContext, useContext, useEffect, useState } from "react";

/* Firebase config Imports */
import { firebaseFirestore } from "../firebase/config";

/* Firestore Imports */
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

/* General Imports */
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  /* User data */
  const [user, setUser] = useState(null);

  /* Users data */
  const [users, setUsers] = useState(null);

  /* Users updater */
  const [updateUsers, setUpdateUsers] = useState(false);

  /* Students data */
  const [students, setStudents] = useState(null);

  /* Professors data */
  const [professors, setProfessors] = useState(null);

  /* Message data */
  const [message, setMessage] = useState("");

  /* Navigate */
  const navigate = useNavigate();

  const signUp = async (email, password, rol, firstName, lastName) => {
    const docuRef = doc(firebaseFirestore, "users", email);
    await setDoc(docuRef, {
      email: email,
      password: password,
      rol: rol,
      first_name: firstName,
      last_name: lastName,
    });
  };

  const logIn = async (email, password) => {
    const docuRef = doc(firebaseFirestore, `users/${email}`);
    const initialData = await getDoc(docuRef);
    const finalData = initialData.data();
    console.log(finalData);
    if (finalData.password !== password) {
      setMessage("Contraseña incorrecta");
      return;
    }
    if (finalData.password === password) {
      setUser(finalData);
      window.localStorage.setItem("user", JSON.stringify(finalData));
      if (finalData.rol === "student") {
        navigate("/student");
      }
      if (finalData.rol === "professor") {
        navigate("/professor");
      }
      if (finalData.rol === "admin") {
        navigate("/admin");
      }
    } else {
      return;
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.clear();
    navigate("/");
  };

  const getUsers = async () => {
    const docuRef = collection(firebaseFirestore, "users");
    const initialData = await getDocs(docuRef);
    const finalData = initialData.docs.map((doc) => doc.data());
    setUsers(finalData);
  };

  const getStudents = async () => {
    const docuRef = collection(firebaseFirestore, "users");
    const condition = where("rol", "==", "estudiante");
    const initialData = await getDocs(query(docuRef, condition));
    const finalData = initialData.docs.map((doc) => doc.data());
    setStudents(finalData);
  };

  const getProfessors = async () => {
    const docuRef = collection(firebaseFirestore, "users");
    const condition = where("rol", "==", "profesor");
    const initialData = await getDocs(query(docuRef, condition));
    const finalData = initialData.docs.map((doc) => doc.data());
    setProfessors(finalData);
  };

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        /* Authorization ---------- */
        signUp,
        logIn,
        logOut,
        /* User ---------- */
        user,
        setUser,
        /* Users ---------- */
        getUsers,
        users,
        setUsers,
        updateUsers,
        setUpdateUsers,
        /* Estudents ---------- */
        getStudents,
        students,
        setStudents,
        /* Professors ---------- */
        getProfessors,
        professors,
        setProfessors,
        /* Message ---------- */
        message,
        setMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function UserAuth() {
  return useContext(AuthContext);
}
