import React from "react";
import { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

const StudentSchedule = () => {
  const { user, getSchedule, schedule } = UserAuth();

  const isEven = (num) => {
    return num % 2 === 0;
  };

  useEffect(() => {
    if (user) {
      getSchedule();
    }
  }, []);

  console.log(schedule);

  return <div>StudentSchedule</div>;
};

export default StudentSchedule;
