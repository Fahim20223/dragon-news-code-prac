import React from "react";
import dragon from "../assets/The Dragon News.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center mx-auto items-center pt-3 flex-col space-y-3">
      <img src={dragon} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE , MMMM dd , yyyy")}</p>
    </div>
  );
};

export default Header;
