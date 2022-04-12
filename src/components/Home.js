import React from "react";
import logo from "../img/logo.jpeg";
import team from "../img/team.jpeg";
import beach from "../img/levels/beach.jpeg";
import snow from "../img/levels/snow.jpeg";
import race from "../img/levels/game.jpeg";
import space from "../img/levels/space.jpeg";
import Button from "./Button";
import Card from "./Card";

const Home = ({ onClick }) => {
  const levels = {
    beach: { name: "beach", img: beach },
    snow: { name: "snow", img: snow },
    race: { name: "race", img: race },
    space: { name: "space", img: space },
  };

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center py-2 px-10 shadow h-24">
        <img src={logo} alt="Where's Wally?" className="max-h-24" />
        <img src={team} alt="Where's Waldo characters" className="max-h-24" />
        <Button name={"Leaderboard"} dest="/leaderboard" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(500px,_1fr))] auto-rows-auto p-14 gap-14">
        <Card
          img={levels.beach.img}
          name={levels.beach.name}
          onClick={onClick}
        />
        <Card img={levels.snow.img} name={levels.snow.name} onClick={onClick} />
        <Card img={levels.race.img} name={levels.race.name} onClick={onClick} />
        <Card
          img={levels.space.img}
          name={levels.space.name}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Home;
