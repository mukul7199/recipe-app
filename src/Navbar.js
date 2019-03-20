import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { getToken } from "./helpers/jwt";

class Navbar extends Component {
  state = { user: undefined };

  componentDidUpdate() {
    const token = getToken();
    fetch("https://recipe-api-123.herokuapp.com/users/me", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data.user });
        console.log(this.state.user);
      })
      .catch(e => {
        localStorage.removeItem("user-token");
        console.log(e);
      });
  }

  handleLogout = () => {
    localStorage.removeItem("user-token");
  };

  render() {
    const activeStyles = {
      background: "#462716"
    };

    return (
      <div>
        <nav className="brown darken-2">
          <div className="container">
            <div className="nav-wrapper">
              <NavLink to="#" className="brand-logo">
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
                  {this.state.user === undefined ? null : (
                    <NavLink to="/recipes/add" activeStyle={activeStyles}>
                      Add Recipe
                    </NavLink>
                  )}
                </li>
                <li>
                  {this.state.user !== undefined ? null : (
                    <NavLink to="/signup" activeStyle={activeStyles}>
                      Signup
                    </NavLink>
                  )}
                </li>
                <li>
                  {this.state.user !== undefined ? (
                    <button className="btn brown" onClick={this.handleLogout}>
                      Logout
                    </button>
                  ) : (
                    <NavLink to="/login" className="btn brown">
                      Login
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
