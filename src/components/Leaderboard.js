import React from "react";
import Button from "./Button";
import logo from "../img/logow.jpeg";
import beach from "../img/levels/beach-thumb.jpeg";
import snow from "../img/levels/snow-thumb.jpeg";
import game from "../img/levels/game-thumb.jpeg";
import space from "../img/levels/space-thumb.jpeg";
import Score from "./Score";

const Leaderboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-2 px-10 shadow h-24">
        <img src={logo} alt="Where's Waldo" className="max-h-24" />
        <p className="text-3xl font-bold">Leaderboard</p>
        <Button name={"Home"} dest="/" />
      </div>
      <div className="px-12 py-8">
        <p className="text-2xl font-bold mb-6">Choose level:</p>
        <div className="flex justify-start gap-4 mb-8">
          <img
            src={beach}
            alt=""
            className="max-h-24 cursor-pointer rounded shadow border border-slate-300"
          />
          <img
            src={snow}
            alt=""
            className="max-h-24 cursor-pointer rounded shadow border border-slate-300"
          />
          <img
            src={game}
            alt=""
            className="max-h-24 cursor-pointer rounded shadow border border-slate-300"
          />
          <img
            src={space}
            alt=""
            className="max-h-24 cursor-pointer rounded shadow border border-slate-300"
          />
        </div>
        <div className="flex flex-col border border-slate-400 bg-slate-400 gap-[1px]">
          <Score name="John" time="120 sec" />
          <Score name="John" time="120 sec" />
          <Score name="John" time="120 sec" />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
