import Home from "./components/Home";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { firebase, firestore } from "./firebase";
import { useState } from "react";

function App() {
  const [level, setLevel] = useState("");

  const handleClick = (level) => {
    setLevel(level);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onClick={handleClick} />} />
        <Route path="/game" element={<Game level={level} />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
