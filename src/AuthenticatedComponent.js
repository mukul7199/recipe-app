import React, { Component } from "react";
import { getToken } from "./helpers/jwt";
import { withRouter } from "react-router-dom";

class AuthenticatedComponent extends Component {
  state = {
    user: undefined
  };

  componentDidMount() {
    const token = getToken();
    if (!token) {
      this.props.history.push("/login");
    }
    fetch("https://recipe-api-123.herokuapp.com/users/me", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ user: data.user });
      });
    // .catch(e => {
    //   localStorage.removeItem("user-token");
    //   this.props.history.push("/login");
    // });
  }

  render() {
    if (this.state.user) return <div>{this.props.children}</div>;
    return <div>Loading...</div>;
  }
}

export default withRouter(AuthenticatedComponent);
