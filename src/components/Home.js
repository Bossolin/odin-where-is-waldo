import React from "react";
import logo from "../img/logo.jpeg";
import team from "../img/team.jpeg";
import beach from "../img/levels/beach.jpeg";
import snow from "../img/levels/snow.jpeg";
import game from "../img/levels/game.jpeg";
import space from "../img/levels/space.jpeg";
import Button from "./Button";
import Card from "./Card";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-2 px-10 shadow">
        <img src={logo} alt="Where's Wally?" className="max-h-24" />
        <img src={team} alt="Where's Waldo characters" className="max-h-24" />
        <Button name={"Leaderboard"} />
      </div>
      <div className="grid grid-cols-2 auto-rows-auto p-12 gap-12">
        <Card img={beach} name={"Beach Level"} />
        <Card img={snow} name={"Snow Level"} />
        <Card img={game} name={"Race Level"} />
        <Card img={space} name={"Space Level"} />
      </div>
    </div>
  );
};

export default Home;
