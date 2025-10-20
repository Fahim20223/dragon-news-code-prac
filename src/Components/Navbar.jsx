import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-9">
      <div></div>
      <div className="flex gap-3 text-accent ">
        <NavLink to="/">
          <h2>Home</h2>
        </NavLink>
        <NavLink to="about">
          <h2>About</h2>
        </NavLink>
        <NavLink to="career">
          <h2>Career</h2>
        </NavLink>
      </div>
      <div className="flex gap-2 justify-end">
        <img src={user} alt="" />
        <button className="btn btn-primary px-6">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
