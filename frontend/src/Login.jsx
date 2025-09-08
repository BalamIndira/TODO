import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      localStorage.setItem("Token", res.data.token);

      setMsg("Login successful! Token saved");

      navigate("/tasks");
      
    } catch (err) {
      setMsg(err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="p-4 mt-40 ml-30 mr-20 bg-blue-200">
      <h1 className="text-xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mt-5 mr-86 ml-97"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mt-5 mr-86 ml-97"
        />

        <button className="bg-green-500 text-white p-2 mt-5 mr-86 ml-97">Login</button>
      </form>

      {msg && <p className="mt-2">{msg}</p>}
    </div>
  );
};
