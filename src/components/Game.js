import React from "react";
import Button from "./Button";
import mugshot from "../img/mugshot.jpeg";
import "../img/levels/beach.jpeg";
import "../img/levels/snow.jpeg";
import "../img/levels/game.jpeg";
import "../img/levels/space.jpeg";

const Game = ({ level }) => {
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
      <img src={level} alt="" />
    </div>
  );
};

export default Game;
