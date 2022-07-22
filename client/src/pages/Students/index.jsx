import React from "react";
import StudentSchedule from "../../components/Tables/StudentSchedule";
import { UserAuth } from "../../context/AuthContext";

const index = () => {
  const { logOut } = UserAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <StudentSchedule />
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default index;
