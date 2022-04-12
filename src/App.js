import Home from "./components/Home";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [level, setLevel] = useState({});

  const handleClick = (name, img) => {
    setLevel({ name, img });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onClick={handleClick} />} />
        <Route path="/game" element={<Game level={level} />} />
        <Route
          path="/leaderboard"
          element={<Leaderboard level={level.name} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
