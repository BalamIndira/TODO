import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Navigate, useNavigate, NavLink } from "react-router-dom";
import { Login } from "./Login";
import { Taskmanager } from "./Components/Taskmanager";
import { Test } from "./Test";

function App() {
  const [tasks, setTasks] = useState([]);
  

  const addTask = (task) => setTasks([...tasks, task]);

  return (
    <div>
      <nav>
        <NavLink to={"/test"}>Test</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test"element={<Test/>} />
        <Route path="/tasks" element={<Taskmanager/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <h1>Simple task manager</h1>
    <Taskmanager/>
    </div>
  );
}

export default App;
