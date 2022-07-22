import React from "react";
import { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

const StudentsTable = () => {
  const { getStudents, students } = UserAuth();

  const isEven = (num) => {
    return num % 2 === 0;
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="bg-clr-primary rounded-3xl text-black text-center mx-auto mt-4 p-4">
      <div className="grid grid-cols-12 gap-x-4 gap-y-2 mx-auto">
        <h4 className="col-span-1 table-header">ID</h4>
        <h4 className="col-span-2 table-header">Nombre</h4>
        <h4 className="col-span-2 table-header">Apellido</h4>
        <h4 className="col-span-1 table-header">Edad</h4>
        <h4 className="col-span-1 table-header">Grado</h4>
        <h4 className="col-span-1 table-header">Salon</h4>
        <h4 className="col-span-1 table-header">Estado</h4>
        <h4 className="col-span-1 table-header">Boletines</h4>
        <div className="col-span-12 bg-clr-secondary-two rounded-full w-[90%] h-1 mx-auto mb-4"></div>
        {students?.map((student) => (
          <>
            <div className="col-span-1">{student.id}</div>
            <div className="col-span-2">{student.name}</div>
            <div className="col-span-2">{student.last_name}</div>
            <div className="col-span-1">{student.age}</div>
            <div className="col-span-1">{student.grade}</div>
            <div className="col-span-1">{student.room}</div>
            <div className="col-span-1">{student.status}</div>
            <div className="col-span-1">{student.rol}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default StudentsTable;
