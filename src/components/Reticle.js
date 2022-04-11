import React from "react";
import ReticleLi from "./ReticleLi";

const Reticle = ({
  x,
  y,
  showReticle,
  setShowReticle,
  findWaldo,
  setFindWaldo,
}) => {
  const cast = ["waldo", "wenda", "wizard", "odlaw"];

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        display: showReticle ? "block" : "none",
      }}
      className="border border-slate-500"
    >
      <div
        onClick={() => setShowReticle(false)}
        className=" h-[3vw] w-[3vw] border-2 border-yellow-300 cursor-default"
      ></div>
      <ul className="bg-slate-400 absolute top-0 left-[3.2vw] border border-slate-400 cursor-pointer flex flex-col gap-[1px] w-[7.5rem] rounded overflow-hidden">
        {cast.map((member, i) => (
          <ReticleLi
            id={i}
            name={member}
            findMember={findWaldo[member]}
            setFindWaldo={setFindWaldo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Reticle;