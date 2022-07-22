import React from "react";
import { UserAuth } from "../../context/AuthContext";

const index = () => {
  const { logOut } = UserAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default index;
