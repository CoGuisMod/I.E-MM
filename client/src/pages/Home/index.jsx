import React from "react";
import {
  faUserTie,
  faUserGraduate,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import AdminHomeCard from "../../components/Cards/AdminHomeCard";

const index = () => {
  return (
    <section className="flex flex-col w-full h-screen pl-20 pr-4 py-4">
      <h1 className="font-bold text-2xl">Administracion - Inicio</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-4 p-4 h-full">
        <AdminHomeCard
          cardLink="/admin/students"
          cardIcon={faUserGraduate}
          cardTitle="Estudiantes"
        />
        <AdminHomeCard
          cardLink="/admin/professors"
          cardIcon={faUserTie}
          cardTitle="Estudiantes"
        />
        <AdminHomeCard
          cardLink="/admin/assignatures"
          cardIcon={faBookOpen}
          cardTitle="Estudiantes"
        />
      </div>
    </section>
  );
};

export default index;
