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
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h3 className="white-text darken-2 center">
          Create
          <span className="black-text darken-2"> An Account</span>
        </h3>
        <br />
        <div className="col s12 m6">
          <div className="card-panel grey lighten-4 grey-text-darken-4 z-depth-0">
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
                placeholder="password"
                rows="20"
              />
              <br />
              <button
                className="waves-effect btn brown darken-5"
                onClick={this.handleSubmit}
              >
                <i className="material-icons left">book</i>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
