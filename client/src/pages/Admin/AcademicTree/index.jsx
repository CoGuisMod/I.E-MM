import React from "react";
import { FaListOl, FaBook } from "react-icons/fa";
import AdminGeneralCard from "../../../components/Cards/AdminGeneralCard";

const index = () => {
  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Malla Curricular</h1>
      <div className="sub-container">
        <div className="general-grid">
          <AdminGeneralCard
            cardLink="grades"
            cardIcon={<FaListOl />}
            cardTitle="Grados academicos"
          />
          <AdminGeneralCard
            cardLink="assignatures"
            cardIcon={<FaBook />}
            cardTitle="Asignaturas"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
