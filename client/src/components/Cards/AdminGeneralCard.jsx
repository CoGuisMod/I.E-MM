import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminGeneralCard = ({ cardLink, cardIcon, cardTitle }) => {
  return (
    <Link
      to={cardLink}
      className="flex justify-start items-center gap-2 bg-clr-secondary-one rounded-3xl max-w-xs p-4"
    >
      <div className="text-5xl">
        <FontAwesomeIcon icon={cardIcon} />
      </div>
      <h3 className="font-bold text-xl sm:text-2xl">{cardTitle}</h3>
    </Link>
  );
};

export default AdminGeneralCard;
