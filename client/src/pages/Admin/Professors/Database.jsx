import React from "react";
import SubTitleCard from "../../../components/Cards/SubTitleCard";
import ProfessorsTable from "../../../components/Tables/ProfessorsTable";
import { FaDatabase } from "react-icons/fa";

const Database = () => {
  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Profesores</h1>
      <div className="sub-container">
        <SubTitleCard
          Icon={<FaDatabase />}
          SubTitle="Base de Datos Profesores"
        />
        <ProfessorsTable />
      </div>
    </section>
  );
};

export default Database;
