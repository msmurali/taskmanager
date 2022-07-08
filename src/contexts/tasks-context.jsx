import React from "react";
import { db, collection } from "services/tasks";
import { onSnapshot } from "firebase/firestore";

const TasksContext = React.createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const colRef = collection(db, collection);
    onSnapshot(colRef, (snapshot) => {
      console.log(snapshot.docs);
    });
  }, []);

  const value = { tasks };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
