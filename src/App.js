import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import HistoryPage from "./pages/history";

import "./App.css";

function App() {
  return (  
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
