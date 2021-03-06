import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import Button from "./Button";
import mugshot from "../img/mugshot.jpeg";
import "../img/levels/beach.jpeg";
import "../img/levels/snow.jpeg";
import "../img/levels/game.jpeg";
import "../img/levels/space.jpeg";
import Reticle from "./Reticle";
import Modal from "./Modal";

const Game = ({ level }) => {
  const [coords, setCoords] = useState({ x: 1, y: 1 });
  const [showReticle, setShowReticle] = useState(false);
  const [firestoreCoords, setFirestoreCoords] = useState({});
  const [roundStartTime, setRoundStartTime] = useState(0);
  const [findWaldo, setFindWaldo] = useState({
    waldo: false,
    wenda: false,
    wizard: false,
    odlaw: false,
  });

  useEffect(() => {
    const levelCollectionRef = collection(firestore, "levels");

    const getCharacters = async () => {
      const data = await getDocs(levelCollectionRef);
      const currentLevel = data.docs.filter((doc) => doc.id === level.name);
      setFirestoreCoords(currentLevel[0].data());
    };

    getCharacters();
    setRoundStartTime(Timestamp.now().seconds);
  }, [level.name]);

  const addPlayer = async (name, time) => {
    const leaderboardCollectionRef = collection(
      firestore,
      `leaderboard/GtgyzI6BKHz49Q5Et147/${level.name}`
    );

    await addDoc(leaderboardCollectionRef, { name, time });
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
  };

  const validateFind = (name) => {
    const img = document.getElementById("level");
    const reticle = document.getElementById("reticle");

    if (
      coords.x / img.width > firestoreCoords[name].x - 0.01 &&
      coords.x / img.width < firestoreCoords[name].x + 0.01 &&
      coords.y / img.height > firestoreCoords[name].y - 0.01 &&
      coords.y / img.height < firestoreCoords[name].y + 0.01
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
      {Object.values(findWaldo).every((item) => item) && (
        <Modal addPlayer={addPlayer} roundStartTime={roundStartTime} />
      )}
      <div className="relative flex justify-between items-center py-2 px-10 shadow bg-slate-100 h-24 z-20">
        <Button name={"Select Level"} dest="/" />
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
