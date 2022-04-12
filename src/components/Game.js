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
      waldo: { x: 0.69, y: 0.445 },
      wenda: { x: 0.882, y: 0.484 },
      wizard: { x: 0.256, y: 0.415 },
      odlaw: { x: 0.053, y: 0.419 },
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
    const reticle = document.getElementById("reticle");

    if (
      coords.x / img.width > fireWaldo[level.name][name].x - 0.01 &&
      coords.x / img.width < fireWaldo[level.name][name].x + 0.01 &&
      coords.y / img.height > fireWaldo[level.name][name].y - 0.01 &&
      coords.y / img.height < fireWaldo[level.name][name].y + 0.01
    ) {
      setFindWaldo((prevState) => ({ ...prevState, [name]: true }));

      reticle.style.border = "2px solid rgb(34 197 94)";

      setTimeout(() => {
        reticle.style.border = "2px solid yellow";
      }, 500);
    } else {
      reticle.style.border = "2px solid red";

      setTimeout(() => {
        reticle.style.border = "2px solid yellow";
      }, 500);
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
