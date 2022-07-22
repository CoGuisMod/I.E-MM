import React from "react";
import { Link } from "react-router-dom";

/* Icons imports */
import { AiFillHome } from "react-icons/ai";
import { FaBookOpen, FaUserGraduate, FaUserTie } from "react-icons/fa";

const NavItemAdmin = () => {
  return (
    <nav className="flex flex-col justify-start items-center gap-3">
      <Link to="/admin" className="nav-link">
        <AiFillHome />
      </Link>
      <Link to="/admin/students" className="nav-link">
        <FaUserGraduate />
      </Link>
      <Link to="/admin/professors" className="nav-link">
        <FaUserTie />
      </Link>
      <Link to="/admin/academic_tree" className="nav-link">
        <FaBookOpen />
      </Link>
    </nav>
  );
};

export default NavItemAdmin;
