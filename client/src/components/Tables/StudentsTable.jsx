import React from "react";
import { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

const StudentsTable = () => {
  const { getStudents, students } = UserAuth();

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="bg-clr-primary text-black">
      <div className="grid grid-cols-12">
        <h4 className="col-span-1">ID</h4>
        <h4 className="col-span-2">Nombre</h4>
        <h4 className="col-span-2">Apellido</h4>
        <h4 className="col-span-1">Edad</h4>
        <h4 className="col-span-1">Grado</h4>
        <h4 className="col-span-1">Salon</h4>
        <h4 className="col-span-1">Estado</h4>
        <h4 className="col-span-1">Boletines</h4>
        <div className="col-span-12 bg-clr-secondary-two w-3/4 h-1"></div>
        <div className="col-span-1">
          {students?.map((student) => (
            <p>{student.id}</p>
          ))}
        </div>
        <div className="col-span-2">
          {students?.map((student) => (
            <p>{student.name}</p>
          ))}
        </div>
        <div className="col-span-2">
          {students?.map((student) => (
            <p>{student.last_name}</p>
          ))}
        </div>
        <div className="col-span-1">
          {students?.map((student) => (
            <p>{student.age}</p>
          ))}
        </div>
        <div className="col-span-1">
          {students?.map((student) => (
            <p>{student.grade}</p>
          ))}
        </div>
        <div className="col-span-1">
          {students?.map((student) => (
            <p>{student.room}</p>
          ))}
        </div>
        <div className="col-span-1">
          {students?.map((student) => (
            <p>{student.status}</p>
          ))}
        </div>
        <div className="col-span-1">
          {students?.map((student) => (
            <p>{student.rol}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsTable;
