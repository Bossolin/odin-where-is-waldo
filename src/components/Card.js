import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, name, onClick }) => {
  return (
    <Link
      onClick={() => onClick(name, img)}
      to="/game"
      className="border rounded-lg shadow-md hover:scale-105 active:scale-100 transition-transform cursor-pointer bg-slate-50"
    >
      <img src={img} alt="" className="rounded shadow-sm" />
      <div className="text-center text-lg p-2 border-t capitalize">
        {name} level
      </div>
    </Link>
  );
};

export default Card;
