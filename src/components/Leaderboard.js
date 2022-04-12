import React, { useEffect, useState } from "react";
import Button from "./Button";
import logo from "../img/logow.jpeg";
import beach from "../img/levels/beach-thumb.jpeg";
import snow from "../img/levels/snow-thumb.jpeg";
import game from "../img/levels/game-thumb.jpeg";
import space from "../img/levels/space-thumb.jpeg";
import Score from "./Score";
import { firestore } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const Leaderboard = ({ level }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentLevel, setCurrentlevel] = useState(level || "beach");

  useEffect(() => {
    const peopleCollectionRef = collection(
      firestore,
      `leaderboard/GtgyzI6BKHz49Q5Et147/${currentLevel}`
    );

    const getPeople = async () => {
      const q = query(peopleCollectionRef, orderBy("time", "asc"));
      const data = await getDocs(q);

      setLeaderboard(
        data.docs.map((person) => ({ ...person.data(), id: person.id }))
      );
    };

    getPeople();
  }, [currentLevel]);

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
            id="beach-leaderboard"
            onClick={() => setCurrentlevel("beach")}
            src={beach}
            alt=""
            className={`max-h-24 cursor-pointer rounded shadow border-2 border-slate-300 ${
              currentLevel === "beach" ? "border-red-500 " : ""
            }`}
          />
          <img
            id="snow-leaderboard"
            onClick={() => setCurrentlevel("snow")}
            src={snow}
            alt=""
            className={`max-h-24 cursor-pointer rounded shadow border-2 border-slate-300 ${
              currentLevel === "snow" ? "border-red-500 " : ""
            }`}
          />
          <img
            id="race-leaderboard"
            onClick={() => setCurrentlevel("race")}
            src={game}
            alt=""
            className={`max-h-24 cursor-pointer rounded shadow border-2 border-slate-300 ${
              currentLevel === "race" ? "border-red-500 " : ""
            }`}
          />
          <img
            id="space-leaderboard"
            onClick={() => setCurrentlevel("space")}
            src={space}
            alt=""
            className={`max-h-24 cursor-pointer rounded shadow border-2 border-slate-300 ${
              currentLevel === "space" ? "border-red-500 " : ""
            }`}
          />
        </div>
        <ul className="flex flex-col border border-slate-400 bg-slate-400 gap-[1px] rounded overflow-hidden">
          {leaderboard.map((person) => (
            <Score name={person.name} time={person.time} key={person.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
