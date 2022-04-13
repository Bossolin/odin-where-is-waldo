import React from "react";

const Score = ({ name, time }) => {
  return (
    <li className="flex justify-between  px-6 py-2 bg-slate-50 odd:bg-slate-100">
      <p className="font-bold">{name}</p>
      <p className="">{time} sec.</p>
    </li>
  );
};

export default Score;
