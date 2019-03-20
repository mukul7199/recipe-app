import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyles = {
    background: "#462716"
  };
  return (
    <div>
      <nav className="brown darken-2">
        <div className="container">
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo">
              RecipeApp
            </NavLink>

            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink exact to="/" activeStyle={activeStyles}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/recipes" activeStyle={activeStyles}>
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to="/recipes/add" activeStyle={activeStyles}>
                  Add Recipe
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" activeStyle={activeStyles}>
                  Signup
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="btn brown">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
