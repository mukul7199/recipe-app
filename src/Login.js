import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
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
    fetch("https://recipe-api-123.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(response => {
        localStorage.setItem("user-token", response.token);
        this.props.history.push("/recipes/add");
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h3 className="white-text darken-2 center">
          Login
          <span className="black-text darken-2"> To Account</span>
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
