import React from "react";
import { Link } from "react-router-dom";

const AdminGeneralCard = ({ cardLink, cardIcon, cardTitle }) => {
  return (
    <Link
      to={cardLink}
      className="flex justify-start items-center gap-2 bg-clr-secondary-one rounded-3xl max-w-xs p-4"
    >
      <div className="text-6xl">{cardIcon}</div>
      <h3 className="font-bold text-2xl">{cardTitle}</h3>
    </Link>
  );
};

export default AdminGeneralCard;
