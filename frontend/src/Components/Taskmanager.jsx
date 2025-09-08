import React, { useEffect, useState } from "react";
import { Taskinput } from "./Taskinput";
import { Taskoutput } from "./Taskoutput";
import axios from "axios";


export const Taskmanager = () => {
  const [tasks, setTask] = useState([]);


  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");

      const tasksData = Array.isArray(response.data)
        ? response.data
        : JSON.parse(response.data);

      setTask(tasksData);
    } catch (error) {
      console.error("error fetching task:", error.message);
      setTask([]);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onAddTask = (task) => {
    console.log("Add task received:", task);
    if (!task || !task.text || !task.text.trim()) return;
    setTask((prev) => [...prev, task]);
  };

  const handleToggle = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/tasks/${id}/toggle`
      );
      setTask((prev) =>
        prev.map((task) => (task._id === id ? response.data : task))
      );
    } catch (error) {
      console.error("error toggling task:", error.message);
      
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTask((prev) => prev.filter((task) => task._id!== id));
    } catch (error) {
      console.error("error deleting task:", error.message);
    }
  };
  return (
    <div>
      <Taskinput addTask={onAddTask} />
      <Taskoutput
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
};
