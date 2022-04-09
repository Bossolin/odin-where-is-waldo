import React from "react";

const Reticle = ({ x, y }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
      }}
      className="border border-black"
    >
      <div className="flex justify-center items-center h-[3vw] w-[3vw] border-2 border-yellow-300  cursor-default">
        +
      </div>
      <ul className="bg-slate-100 absolute top-0 left-12 px-2 py-1 rounded border border-black">
        <li className="border-b border-black">Waldo</li>
        <li className="border-b border-black">Wenda</li>
        <li className="border-b border-black">Wizard</li>
        <li className="">Odlaw</li>
      </ul>
    </div>
  );
};

export default Reticle;
