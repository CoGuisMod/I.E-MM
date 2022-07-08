import React from "react";
import AdminGeneralCard from "../../components/Cards/AdminGeneralCard";
import {
  faFileAlt,
  faSearch,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const index = () => {
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
          <AdminGeneralCard
            cardLink="consult"
            cardIcon={faSearch}
            cardTitle="Consultar estudiante"
          />
          <AdminGeneralCard
            cardLink="database"
            cardIcon={faDatabase}
            cardTitle="Base de datos estudiantes"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
