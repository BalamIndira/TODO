import axios from "axios";
import React, { useState } from "react";

export const Taskinput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleTask = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    try {
      const response = await axios.post("http://localhost:5000/submit", {
        text: task,
        completed: false,
      });

      addTask(response.data);
      setTask("");
    } catch (error) {
      console.error(
        "error submitting form:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="bg-amber-50 mt-5 mr-86 ml-97">
      <form onSubmit={handleTask} className="border-3 px-2 py-4 ">
        <input
          className="border-2 "
          type="text"
          placeholder="          Enter the task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        
        <br />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-1.5"
        >
          AddTask
        </button>
      </form>
    </div>
  );
};
