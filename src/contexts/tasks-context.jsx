import React from "react";
import { db, col } from "services/tasks";
import { onSnapshot, collection, doc } from "firebase/firestore";
import { useAuth } from "contexts/auth-context";

export const TasksContext = React.createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const { user } = useAuth();

  React.useEffect(() => {
    if (!user) return;

    const colRef = collection(db, col);
    const docRef = doc(colRef, user.uid);

    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      const data = snapshot.data();
      if (data) {
        setTasks(Object.keys(data).map((key) => ({ ...data[key], id: key })));
      } else {
        setTasks([]);
      }
    });

    return unsubscribe;
  }, [user]);

  const value = {
    tasks,
    incompleteTasksCount: tasks?.filter((task) => !task.completed).length,
    date,
    setDate,
  };

  return (
    <TasksContext.Provider value={value}>
      {tasks && children}
    </TasksContext.Provider>
  );
};
