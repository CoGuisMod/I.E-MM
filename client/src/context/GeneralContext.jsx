import { createContext, useContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../firebase/config";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [grades, setGrades] = useState(null);
  const [assignatures, setAssignatures] = useState(null);

  /* Modals data */
  const [isShowingModal, setIsShowingModal] = useState(false);

  const navigate = useNavigate();

  /* const signUp = async (email, password, rol, firstName, lastName) => {
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
    if (finalData.password !== password) {
      setMessage("Contraseña incorrecta");
      return;
    }
    if (finalData.password === password) {
      setUser(finalData);
      window.localStorage.setItem("user", JSON.stringify(finalData));
      if (finalData.rol === "seller") {
        navigate("/seller");
      }
      if (finalData.rol === "mechanic") {
        navigate("/mechanic");
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

  const deleteUser = async (email) => {
    const docuRef = doc(firebaseFirestore, `users`, email);
    await deleteDoc(docuRef);
  }; */

  const getGrades = async () => {
    const docuRef = collection(firebaseFirestore, "grades");
    const initialData = await getDocs(docuRef);
    const finalData = initialData.docs.map((doc) => doc.data());
    setGrades(finalData);
  };

  const getAssignatures = async () => {
    const docuRef = collection(firebaseFirestore, "assignatures");
    const initialData = await getDocs(docuRef);
    const finalData = initialData.docs.map((doc) => doc.data());
    setAssignatures(finalData);
  };

  return (
    <GeneralContext.Provider
      value={{
        /* Grades ---------- */
        getGrades,
        setGrades,
        grades,
        /* Assignatures ---------- */
        getAssignatures,
        setAssignatures,
        assignatures,
        /* Modals ---------- */
        isShowingModal,
        setIsShowingModal,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export function GeneralData() {
  return useContext(GeneralContext);
}
