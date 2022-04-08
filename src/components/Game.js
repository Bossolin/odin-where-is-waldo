import React from "react";
import Button from "./Button";
import mugshot from "../img/mugshot.jpeg";

const Game = () => {
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
    </div>
  );
};

export default Game;
