import React from "react";
import waldo from "../img/characters/waldo.jpeg";
import wenda from "../img/characters/wenda.jpeg";
import wizard from "../img/characters/wizard.jpeg";
import odlaw from "../img/characters/odlaw.jpeg";

const ReticleLi = ({ name, findMember, validateFind }) => {
  const characters = { waldo, wenda, wizard, odlaw };
  return (
    <li
      className="bg-white px-2 py-1 flex  items-center justify-between hover:bg-slate-50"
      onClick={() => validateFind(name)}
    >
      <img src={characters[name]} alt="" className="h-6" />
      <p className="capitalize">{name}</p>
      {findMember ? (
        <p className="text-green-500 text-lg">&#10003;</p>
      ) : (
        <div className="h-[28px]"></div>
      )}
    </li>
  );
};

export default ReticleLi;
