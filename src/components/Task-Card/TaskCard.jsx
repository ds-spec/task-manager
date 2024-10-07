import React, { useEffect, useState } from "react";
import "./TaskCard.css";
import assets from "../../assets/assets";
import { useAuth } from "../../AuthProvider";
import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const TaskCard = () => {
  const [taskCards, setTaskCards] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser.uid) return;
    // const fetchTaskCards = async () => {
    const q = query(
      collection(db, "tasks"),
      where("userId", "==", currentUser?.uid)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedTasks = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      console.log(fetchedTasks, "fetchedTasks");
      setTaskCards(fetchedTasks);
    });
    return () => unsubscribe();
  }, [currentUser?.uid]);

  console.log(currentUser);
  console.log(taskCards);

  // const tasks = [
  //   {
  //     taskName: "Make Prototypes",
  //     taskDescription: "Create a responsive CSS layout for a website",
  //     backgroundColor: "#C3B0FF",
  //     taskCompleted: "70%",
  //   },
  //   {
  //     taskName: "Create Assets",
  //     taskDescription: "Create a responsive asset for a website",
  //     backgroundColor: "#95EAFF",
  //     taskCompleted: "40%",
  //   },
  //   {
  //     taskName: "Create a linkedin post",
  //     taskDescription: "Create a react doc",
  //     backgroundColor: "aqua",
  //     taskCompleted: "24%",
  //   },
  //   {
  //     taskName: "Create a twitter account",
  //     taskDescription: "Learn in public",
  //     backgroundColor: "#95EAFF",
  //     taskCompleted: "38%",
  //   },
  // ];

  const tasks = taskCards;
  return (
    <div id="task-list">
      {tasks?.map((task, index) => (
        <div
          id="task-card"
          key={index}
          style={{ backgroundColor: task?.backgroundColor }}
        >
          <h3 id="taskName">{task?.taskName}</h3>
          <p id="taskDesc">{task?.taskDescription}</p>
          {/* <img src={assets.menu} alt="" /> */}
          {/* <div id="progress">
            <div id="progress-bar">
              <div id="progress-track" style={{ width: task?.taskCompleted }}>
                <h5>Progress</h5>
                <h5>{task?.taskCompleted}</h5>
              </div>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
