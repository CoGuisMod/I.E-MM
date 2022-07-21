import React from "react";
import SubTitleCard from "../../components/Cards/SubTitleCard";
import StudentsTable from "../../components/Tables/StudentsTable";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Database = () => {
  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Estudiantes</h1>
      <div className="sub-container">
        <SubTitleCard Icon={faDatabase} SubTitle="Base de Datos Estudiantes" />
        <StudentsTable />
      </div>
    </section>
  );
};

export default Database;
