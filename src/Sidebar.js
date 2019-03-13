import React from "react";
import { slide as Menu } from "react-burger-menu";

export default Sidebar => {
  return (
    <Menu className="black-text">
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/recipes">
        View Recipes
      </a>

      <a className="menu-item" href="/recipes/add">
        Add Recipes
      </a>

      <a className="menu-item" href="/signup">
        Sign up
      </a>

      <a className="menu-item" href="/login">
        Login
      </a>
    </Menu>
  );
};
