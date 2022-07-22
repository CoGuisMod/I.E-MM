import { createContext, useContext, useEffect, useState } from "react";
import { firebaseFirestore } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  /* Grades data */
  const [grades, setGrades] = useState(null);

  /* Assignatures data */
  const [assignatures, setAssignatures] = useState(null);

  /* Modals data */
  const [isShowingModal, setIsShowingModal] = useState(false);

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
