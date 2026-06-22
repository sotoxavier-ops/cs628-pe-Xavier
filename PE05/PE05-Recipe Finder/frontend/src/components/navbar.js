import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/">
        Recipe Finder
      </NavLink>

      <div className="navbar-nav">
        <NavLink className="nav-link" to="/">
          Recipe List
        </NavLink>

        <NavLink className="nav-link" to="/create">
          Add Recipe
        </NavLink>
      </div>
    </nav>
  );
}