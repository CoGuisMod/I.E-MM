import React, { useState } from "react";
import { GeneralData } from "../../context/GeneralContext";
import AdminGeneralCard from "../../components/Cards/AdminGeneralCard";
import {
  faFileAlt,
  faSearch,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import SearchModal from "../../components/Modals/SearchModal";

const index = () => {
  const { setIsShowingModal } = GeneralData();

  const handleConsult = () => {
    setIsShowingModal(true);
  };

  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Estudiantes</h1>
      <div className="sub-container">
        <AdminGeneralCard
          cardLink="form"
          cardIcon={faFileAlt}
          cardTitle="Formulario inscripcion"
        />
        <div className="general-grid mt-4">
          <div onClick={handleConsult}>
            <AdminGeneralCard
              cardLink=""
              cardIcon={faSearch}
              cardTitle="Consultar estudiante"
            />
          </div>
          <AdminGeneralCard
            cardLink="database"
            cardIcon={faDatabase}
            cardTitle="Base de datos estudiantes"
          />
        </div>
      </div>
      <SearchModal userType="student" />
    </section>
  );
};

export default index;
