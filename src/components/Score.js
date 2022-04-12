import React from "react";

const Score = ({ name, time }) => {
  return (
    <li className="flex justify-between  px-6 py-1 bg-slate-50">
      <p className="">{name}</p>
      <p className="">{time} sec.</p>
    </li>
  );
};

export default Score;
