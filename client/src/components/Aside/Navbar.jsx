import React from "react";
import { UserAuth } from "../../context/AuthContext";

/* Nav Items Imports */
import NavItemsStudents from "./NavItemsStudents";
import NavItemsProfessor from "./NavItemsProfessor";
import NavItemAdmin from "./NavItemAdmin";

/* Icons Imports */
import { FaBars } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <aside
      className={`absolute left-0 top-0 ${user ? null : "hidden"} p-4 h-screen`}
    >
      <div className="flex flex-col gap-4 bg-clr-secondary-one rounded-full text-4xl px-2 py-4 h-full">
        <FaBars />

        {user?.rol === "student" ? (
          <NavItemsStudents />
        ) : user?.rol === "professor" ? (
          <NavItemsProfessor />
        ) : user?.rol === "admin" ? (
          <NavItemAdmin />
        ) : null}

        <div className="flex justify-center items-center mt-auto">
          <button
            onClick={handleLogOut}
            className=" text-clr-thertiary-one hover:text-clr-thertiary-two"
          >
            <MdLogout />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
