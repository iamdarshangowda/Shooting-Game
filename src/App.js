import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import GameArea from "./Components/GameArea";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GameArea" element={<GameArea />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
