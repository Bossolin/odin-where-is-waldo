import React from "react";
import logo from "../img/logo.jpeg";
import team from "../img/team.jpeg";
import beach from "../img/levels/beach.jpeg";
import snow from "../img/levels/snow.jpeg";
import game from "../img/levels/game.jpeg";
import space from "../img/levels/space.jpeg";
import Button from "./Button";
import Card from "./Card";

const Home = ({ onClick }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center py-2 px-10 shadow h-24">
        <img src={logo} alt="Where's Wally?" className="max-h-24" />
        <img src={team} alt="Where's Waldo characters" className="max-h-24" />
        <Button name={"Leaderboard"} dest="/leaderboard" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(500px,_1fr))] auto-rows-auto p-12 gap-12">
        <Card img={beach} name={"Beach Level"} onClick={onClick} />
        <Card img={snow} name={"Snow Level"} onClick={onClick} />
        <Card img={game} name={"Race Level"} onClick={onClick} />
        <Card img={space} name={"Space Level"} onClick={onClick} />
      </div>
    </div>
  );
};

export default Home;
