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

  const getCoords = (e) => {
    const parent = document.getElementById("grid");

    let bounds = parent.getBoundingClientRect();
    let x = e.clientX - bounds.left - 24;
    let y = e.clientY - bounds.top - 24;

    setCoords({
      x: x,
      y: y,
    });
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
      <div className="relative" onClick={getCoords} id="grid">
        <img src={level} alt="" />
        <Reticle x={coords.x} y={coords.y} />
      </div>
    </div>
  );
};

export default Game;
