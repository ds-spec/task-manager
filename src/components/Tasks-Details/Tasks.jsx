import React, { useContext } from "react";
import { useAuth } from "../../AuthProvider";

const Tasks = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return <div>Tasks</div>;
};

export default Tasks;
