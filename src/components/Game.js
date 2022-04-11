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
  const [findWaldo, setFindWaldo] = useState({
    waldo: false,
    wenda: false,
    wizard: false,
    odlaw: false,
  });

  const setRecicle = (e) => {
    let bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left - e.target.width * 0.015;
    let y = e.clientY - bounds.top - e.target.width * 0.015;

    setCoords({
      x: x,
      y: y,
    });

    setShowReticle(true);

    if (
      x / e.target.width > 0.59 &&
      x / e.target.width < 0.61 &&
      y / e.target.height > 0.34 &&
      y / e.target.height < 0.36
    ) {
      console.log("you clicked on waldo");
    }

    // console.log(x, y, e.target.width, e.target.height);
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
          findWaldo={findWaldo}
          setFindWaldo={setFindWaldo}
        />
      </div>
    </div>
  );
};

export default Game;
