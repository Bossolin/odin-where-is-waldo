import React, { useState } from "react";
import Button from "./Button";
import mugshot from "../img/mugshot.jpeg";
import "../img/levels/beach.jpeg";
import "../img/levels/snow.jpeg";
import "../img/levels/game.jpeg";
import "../img/levels/space.jpeg";
import Reticle from "./Reticle";

const Game = ({ level }) => {
  const [coords, setCoords] = useState({ x: 1, y: 1 });
  const [showReticle, setShowReticle] = useState(false);

  const setRecicle = (e) => {
    let bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left - e.target.width * 0.015;
    let y = e.clientY - bounds.top - e.target.width * 0.015;

    setCoords({
      x: x,
      y: y,
    });

    setShowReticle(true);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center py-2 px-10 shadow bg-slate-100 h-24">
        <Button name={"Choose Level"} dest="/" />
        <img
          src={mugshot}
          alt="Where's Waldo characters"
          className="max-h-24"
        />
        <Button name={"Leaderboard"} dest="/leaderboard" />
      </div>
      <div className="relative">
        <img src={level} alt="" onClick={setRecicle} />
        <Reticle
          x={coords.x}
          y={coords.y}
          showReticle={showReticle}
          setShowReticle={setShowReticle}
        />
      </div>
    </div>
  );
};

export default Game;
