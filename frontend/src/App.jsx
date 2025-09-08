import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { Taskmanager } from "./Components/Taskmanager";

function App() {
  const [tasks, setTasks] = useState([]);
  

  const addTask = (task) => setTasks([...tasks, task]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Taskmanager/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* <h1>Simple task manager</h1>
    <Taskmanager/> */}
    </div>
  );
}

export default App;
