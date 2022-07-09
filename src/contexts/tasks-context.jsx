import React from "react";
import { db, col } from "services/tasks";
import { onSnapshot, collection } from "firebase/firestore";

export const TasksContext = React.createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const colRef = collection(db, col);
    onSnapshot(colRef, (snapshot) => {
      const data = [];
      snapshot.docs.map((doc) => data.push(doc.data().tasks));
      setTasks(data);
    });
  }, []);

  const value = {
    tasks,
    incompleteTasksCount: tasks.filter((task) => !task.complete).length,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
