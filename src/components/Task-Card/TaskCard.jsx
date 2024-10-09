import React, { useEffect, useState } from "react";
import "./TaskCard.css";
import assets from "../../assets/assets";
import { FiArrowUpRight } from "react-icons/fi";

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
  const [activeCard, setActiveCard] = useState(false);

  // useEffect(() => {
  //   if (!currentUser.uid) return;
  //   // const fetchTaskCards = async () => {
  //   const q = query(
  //     collection(db, "tasks"),
  //     where("userId", "==", currentUser?.uid)
  //   );
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     const fetchedTasks = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //     }));
  //     console.log(fetchedTasks, "fetchedTasks");
  //     setTaskCards(fetchedTasks);
  //   });
  //   return () => unsubscribe();
  // }, [currentUser?.uid]);

  console.log(currentUser);
  console.log(taskCards);

  const tasks = [
    {
      taskName: "Planning",
    },
    {
      taskName: "Design",
    },
    {
      taskName: "Content Creation",
    },
    {
      taskName: "Analysis",
    },
  ];

  return (
    <div id="task-list">
      {tasks?.map((task, index) => (
        <div
          id="task-card"
          onClick={() => setActiveCard(true)}
          key={index}
          style={{ backgroundColor: "#000" }}
        >
          <h3 id="taskName">{task?.taskName}</h3>
          <div id="shared-users">
            <img src={assets.user1} alt="" />
            <img src={assets.user2} alt="" />
            <img src={assets.user3} alt="" />
            <img src={assets.user4} alt="" />
          </div>
          <div id="track-time">
            <h4>
              Tracked <span>5h 25m</span>
            </h4>
            <FiArrowUpRight />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
