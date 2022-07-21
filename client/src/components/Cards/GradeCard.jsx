import React, { useState } from "react";
import { getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faX } from "@fortawesome/free-solid-svg-icons";
import { GeneralData } from "../../context/GeneralContext";
import { UserAuth } from "../../context/AuthContext";

const GradeCard = ({ isEditingProp, grade }) => {
  const { getProfessors, professors } = UserAuth();

  const [isEditing, setIsEditing] = useState(isEditingProp);
  const [professor, setProfessor] = useState(null);

  const [newGrade, setNewGrade] = useState("");

  const getProfessor = async () => {
    const data = await getDoc(grade.professor);
    setProfessor(data.data());
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    getProfessor();
  }, [grade]);

  useEffect(() => {
    getProfessors();
  }, []);

  return (
    <div className="relative flex flex-col bg-clr-primary rounded-xl text-black w-full max-w-xs px-3 py-2">
      <div
        onClick={handleEdit}
        className="cursor-pointer absolute right-0 top-0 flex justify-center items-center bg-clr-secondary-one rounded-full text-clr-primary hover:text-clr-thertiary-one text-xl p-3 translate-x-1/2 -translate-y-1/2"
      >
        {isEditing ? (
          <FontAwesomeIcon icon={faX} />
        ) : (
          <FontAwesomeIcon icon={faPen} />
        )}
      </div>
      <p className="flex gap-1 font-bold text-xl">
        Grado:{" "}
        {isEditing ? (
          <input
            type="text"
            defaultValue={grade?.grade}
            onChange={(e) => setGrade({ ...grade, grade: e.target.value })}
            className="border border-clr-secondary-two rounded-full w-full px-2"
          />
        ) : (
          <span>{grade?.grade}</span>
        )}
      </p>
      <div className="bg-clr-secondary-two rounded-full w-full h-1 my-3"></div>
      <p className="font-medium text-lg">
        Encargado:
        <br />
        {isEditing ? (
          <input
            type="text"
            defaultValue={professor?.name}
            className="border border-clr-secondary-two rounded-full w-full px-2"
          />
        ) : (
          <span>
            {professor?.name} {professor?.last_name}
          </span>
        )}
      </p>
    </div>
  );
};

export default GradeCard;
