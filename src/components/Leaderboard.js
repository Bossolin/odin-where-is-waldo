import React from "react";
import Button from "./Button";
import logo from "../img/logow.jpeg";

const Leaderboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-2 px-10 shadow h-24">
        <img src={logo} alt="Where's Waldo" className="max-h-24" />
        <div className="text-3xl font-bold">Leaderboard</div>
        <Button name={"Select level"} dest="/" />
      </div>
    </div>
  );
};

export default Leaderboard;
