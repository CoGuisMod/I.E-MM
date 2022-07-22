import React from "react";
import SubTitleCard from "../../../components/Cards/SubTitleCard";
import { FaBook } from "react-icons/fa";

const Assignatures = () => {
  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Estudiantes</h1>
      <div className="sub-container">
        <SubTitleCard Icon={<FaBook />} SubTitle="Asignaturas" />
      </div>
    </section>
  );
};

export default Assignatures;
