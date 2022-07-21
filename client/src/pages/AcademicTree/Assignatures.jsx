import React from "react";
import SubTitleCard from "../../components/Cards/SubTitleCard";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Assignatures = () => {
  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Estudiantes</h1>
      <div className="sub-container">
        <SubTitleCard Icon={faBook} SubTitle="Asignaturas" />
      </div>
    </section>
  );
};

export default Assignatures;
