import React from "react";

const Card = ({ img, name }) => {
  return (
    <div className="border rounded-lg shadow-md hover:scale-105 active:scale-100 transition-transform cursor-pointer">
      <img src={img} alt="" className="rounded shadow-sm" />
      <div className="text-center text-lg p-2 border-t">{name}</div>
    </div>
  );
};

export default Card;
