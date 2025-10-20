import React from "react";
import swimming from "../assets/swimming.png";
import classStudent from "../assets/class.png";
import playGround from "../assets/playground.png";
import background from "../assets/bg.png";

const QZone = () => {
  return (
    <div className="mt-5">
      <h1 className="font-bold mb-5">Q-Zone</h1>
      <div className="py-2 space-y-3 bg-base-200 rounded-md">
        <img className="mx-auto" src={swimming} alt="" />
        <img className="mx-auto" src={classStudent} alt="" />
        <img className="mx-auto" src={playGround} alt="" />
      </div>
      <img className="mt-3 mx-auto" src={background} alt="" />
    </div>
  );
};

export default QZone;
