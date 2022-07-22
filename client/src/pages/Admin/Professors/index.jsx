import React from "react";
import AdminGeneralCard from "../../../components/Cards/AdminGeneralCard";
import { FaSearch, FaDatabase } from "react-icons/fa";

const index = () => {
  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Profesores</h1>
      <div className="sub-container">
        <div className="general-grid">
          <AdminGeneralCard
            cardLink=""
            cardIcon={<FaSearch />}
            cardTitle="Consultar profesor"
          />
          <AdminGeneralCard
            cardLink="database"
            cardIcon={<FaDatabase />}
            cardTitle="Base de datos profesores"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
