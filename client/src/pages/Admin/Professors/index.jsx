import React from "react";
import { GeneralData } from "../../../context/GeneralContext";
import AdminGeneralCard from "../../../components/Cards/AdminGeneralCard";
import SearchModal from "../../../components/Modals/SearchModal";
import { FaSearch, FaDatabase, FaFileAlt } from "react-icons/fa";

const index = () => {
  const { setIsShowingModal } = GeneralData();

  const handleSearch = () => {
    setIsShowingModal(true);
  };

  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Profesores</h1>
      <div className="sub-container">
        <AdminGeneralCard
          cardLink="form"
          cardIcon={<FaFileAlt />}
          cardTitle="Inscribir Profesor"
        />
        <div className="general-grid mt-4">
          <div onClick={handleSearch}>
            <AdminGeneralCard
              cardLink=""
              cardIcon={<FaSearch />}
              cardTitle="Consultar profesor"
            />
          </div>
          <AdminGeneralCard
            cardLink="database"
            cardIcon={<FaDatabase />}
            cardTitle="Base de datos profesores"
          />
        </div>
      </div>
      <SearchModal userType="professor" />
    </section>
  );
};

export default index;
