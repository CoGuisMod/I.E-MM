import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminHomeCard = ({ cardLink, cardIcon, cardTitle }) => {
  return (
    <Link
      to={cardLink}
      className="flex flex-col justify-center items-center gap-2 bg-clr-secondary-one rounded-3xl text-center w-full max-w-xs h-full max-h-64 mx-auto px-8 py-6"
    >
      <FontAwesomeIcon icon={cardIcon} className="text-6xl md:text-7xl" />
      <h2 className="font-bold text-2xl md:text-3xl">{cardTitle}</h2>
    </Link>
  );
};

export default AdminHomeCard;
