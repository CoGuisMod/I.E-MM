import React from "react";
import {
  faUserTie,
  faUserGraduate,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import AdminHomeCard from "../../components/Cards/AdminHomeCard";

const index = () => {
  return (
    <section className="main-container">
      <h1 className="main-title">Administracion - Inicio</h1>
      <div className="flex justify-center sm:items-center h-full mt-8 sm:mt-0">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl h-full max-h-60">
          <AdminHomeCard
            cardLink="/admin/students"
            cardIcon={faUserGraduate}
            cardTitle="Estudiantes"
          />
          <AdminHomeCard
            cardLink="/admin/professors"
            cardIcon={faUserTie}
            cardTitle="Profesores"
          />
          <AdminHomeCard
            cardLink="/admin/academic_tree"
            cardIcon={faBookOpen}
            cardTitle="Malla Curricular"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
