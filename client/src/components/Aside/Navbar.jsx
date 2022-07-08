import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUserTie,
  faUserGraduate,
  faBookOpen,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <aside className="absolute left-0 top-0 p-4 h-screen">
      <div className="flex flex-col gap-4 bg-clr-secondary-one rounded-full text-3xl px-2 py-4 h-full">
        <FontAwesomeIcon icon={faBars} />

        <nav className="flex flex-col justify-start items-center gap-3">
          <Link to="/admin" className="nav-link">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/admin/students" className="nav-link">
            <FontAwesomeIcon icon={faUserGraduate} />
          </Link>
          <Link to="/admin/professors" className="nav-link">
            <FontAwesomeIcon icon={faUserTie} />
          </Link>
          <Link to="/admin/assignatures" className="nav-link">
            <FontAwesomeIcon icon={faBookOpen} />
          </Link>
        </nav>

        <div className="flex justify-center items-center mt-auto">
          <button className=" text-clr-thertiary-one hover:text-clr-thertiary-two">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
