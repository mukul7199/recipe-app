import React, { Component } from "react";
import "./App.css";
export default class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("https://recipe-api-123.herokuapp.com/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    }).then(response => console.log(response.user));
  };

  render() {
    return (
      <div className="container col s12" style={{ display: "block" }}>
        <h3 className="white-text darken-2 center">
          Signup
          <span className="black-text darken-2"> Add Your Own Recipes</span>
        </h3>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="passeord"
            rows="20"
          />
          <button
            className="waves-effect btn brown darken-5"
            onClick={this.handleSubmit}
          >
            <i className="material-icons left">book</i>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
