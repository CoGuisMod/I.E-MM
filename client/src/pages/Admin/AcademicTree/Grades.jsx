import React, { useState } from "react";
import SubTitleCard from "../../../components/Cards/SubTitleCard";
import { useEffect } from "react";
import GradeCard from "../../../components/Cards/GradeCard";
import { FaListOl, FaPlus } from "react-icons/fa";
import { GeneralData } from "../../../context/GeneralContext";

const Grades = () => {
  const { getGrades, grades } = GeneralData();

  const [isAdding, setIsAdding] = useState(false);
  const [newGrade, setNewGrade] = useState({
    grade: "",
    professor: "",
  });

  const handleAdd = () => {
    setIsAdding(true);
  };

  useEffect(() => {
    getGrades();
  }, []);

  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Estudiantes</h1>
      <div className="sub-container">
        <SubTitleCard Icon={<FaListOl />} SubTitle="Grados Academicos" />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 w-full px-4 pt-8">
          {grades?.map((grade) => (
            <GradeCard isEditingProp={false} grade={grade} />
          ))}
          {isAdding ? (
            <GradeCard isEditingProp={true} grade={newGrade} />
          ) : null}
          <div
            onClick={handleAdd}
            className="cursor-pointer flex justify-center items-center text-clr-primary hover:text-clr-thertiary-one text-5xl w-full max-w-xs px-3 py-2"
          >
            <FaPlus />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grades;
