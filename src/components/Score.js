import React from "react";

const Score = ({ name, time }) => {
  return (
    <div className="flex justify-between  px-6 py-1 bg-slate-50">
      <p className="">{name}</p>
      <p className="">{time}</p>
    </div>
  );
};

export default Score;
