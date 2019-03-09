import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-materialize";
const Navbar = () => {
  return (
    <div>
      <nav className="brown darken-2">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="#" className="brand-logo">
              RecipeApp
            </Link>

            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
              <li>
                <Link to="/recipes/add">Add Recipe</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
