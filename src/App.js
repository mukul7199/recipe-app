import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Recipes from "./Recipes";
import Home from "./Home";
import AddRecipe from "./AddRecipe";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/recipes" component={Recipes} />
            <Route path="/recipes/add" component={AddRecipe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
