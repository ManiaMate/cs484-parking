import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/homepage";


import "./App.css";

function App() {
  return (  
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
