import React from "react";
import { NavLink } from "react-router-dom";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header" data-scroll-section>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/About">Work</NavLink>
      <NavLink to="/About">Contact</NavLink>
      <NavLink to="/About">
        <BiDotsHorizontalRounded className="menu-icons" />
      </NavLink>
    </div>
  );
};

export default Header;
