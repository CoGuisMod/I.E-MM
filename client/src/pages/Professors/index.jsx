import React from "react";
import AdminGeneralCard from "../../components/Cards/AdminGeneralCard";
import { faSearch, faDatabase } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Profesores</h1>
      <div className="sub-container">
        <div className="general-grid">
          <AdminGeneralCard
            cardLink=""
            cardIcon={faSearch}
            cardTitle="Consultar profesor"
          />
          <AdminGeneralCard
            cardLink="database"
            cardIcon={faDatabase}
            cardTitle="Base de datos profesores"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
