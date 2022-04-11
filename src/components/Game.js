import React, { useState } from "react";
import { firebase, firestore } from "../firebase";
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

  const fireWaldo = {
    beach: {
      waldo: { x: 0.603, y: 0.353 },
      wenda: { x: 0.757, y: 0.386 },
      wizard: { x: 0.255, y: 0.329 },
      odlaw: { x: 0.092, y: 0.332 },
    },
  };

  const setRecicle = (e) => {
    let bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left - e.target.width * 0.015;
    let y = e.clientY - bounds.top - e.target.width * 0.015;

    setCoords({
      x: x,
      y: y,
    });

    setShowReticle(true);

    console.log(x / e.target.width, y / e.target.height);
  };

  const validateFind = (name) => {
    const img = document.getElementById("level");

    if (
      coords.x / img.width > fireWaldo[level.name][name].x - 0.01 &&
      coords.x / img.width < fireWaldo[level.name][name].x + 0.01 &&
      coords.y / img.height > fireWaldo[level.name][name].y - 0.01 &&
      coords.y / img.height < fireWaldo[level.name][name].y + 0.01
    ) {
      setFindWaldo((prevState) => ({ ...prevState, [name]: true }));
    }
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
        <img src={level.img} alt="" onClick={setRecicle} id="level" />
        <Reticle
          x={coords.x}
          y={coords.y}
          showReticle={showReticle}
          setShowReticle={setShowReticle}
          findWaldo={findWaldo}
          validateFind={validateFind}
        />
      </div>
    </div>
  );
};

export default Game;
