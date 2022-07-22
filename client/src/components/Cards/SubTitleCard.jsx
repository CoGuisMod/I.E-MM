import React from "react";

const SubTitleCard = ({ Icon, SubTitle }) => {
  return (
    <div className="flex justify-start items-center gap-2 bg-clr-secondary-one rounded-3xl font-bold text-4xl w-full p-4">
      <div>{Icon}</div>
      <h2 className="text-3xl">{SubTitle}</h2>
    </div>
  );
};

export default SubTitleCard;
