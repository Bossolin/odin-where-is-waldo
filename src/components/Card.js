import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, name, onClick }) => {
  return (
    <Link
      onClick={() => onClick(img)}
      to="/game"
      className="border rounded-lg shadow-md hover:scale-105 active:scale-100 transition-transform cursor-pointer"
    >
      <img src={img} alt="" className="rounded shadow-sm" />
      <div className="text-center text-lg p-2 border-t">{name}</div>
    </Link>
  );
};

export default Card;
