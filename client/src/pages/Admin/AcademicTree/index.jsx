import React from "react";
import AdminGeneralCard from "../../components/Cards/AdminGeneralCard";
import { faListOl, faBook } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Malla Curricular</h1>
      <div className="sub-container">
        <div className="general-grid">
          <AdminGeneralCard
            cardLink="academic_grades"
            cardIcon={faListOl}
            cardTitle="Grados academicos"
          />
          <AdminGeneralCard
            cardLink="assignatures"
            cardIcon={faBook}
            cardTitle="Asignaturas"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
