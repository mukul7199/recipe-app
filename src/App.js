import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Recipes from "./Recipes";
import Home from "./Home";
import AddRecipe from "./AddRecipe";
import Signup from "./Signup";
import AuthenticatedComponent from "./AuthenticatedComponent";
import Login from "./Login";
import Sidebar from "./Sidebar";
class App extends Component {
  state = {
    user: undefined
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Sidebar className="hide-on-large-only" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={Recipes} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <AuthenticatedComponent>
              <Route path="/recipes/add" component={AddRecipe} />
            </AuthenticatedComponent>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
