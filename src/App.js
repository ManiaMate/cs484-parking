import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import HistoryPage from "./pages/history";
import AveragePage from "./pages/average";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/average" element={<AveragePage />} />
      </Routes>
    </div>
  );
}

export default App;
