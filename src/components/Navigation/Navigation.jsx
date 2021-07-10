import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav id="top-nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li>
          <NavLink to="/weather">Weather</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
