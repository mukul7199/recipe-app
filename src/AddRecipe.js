import React, { Component } from "react";
import "./App.css";
export default class AddRecipe extends Component {
  state = {
    title: "",
    ingredients: "",
    steps: "",
    image: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("https://recipe-api-123.herokuapp.com/recipes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        ingredients: this.state.ingredients,
        steps: this.state.steps,
        image: this.state.image
      })
    }).then(recipe => console.log(recipe));
  };

  render() {
    return (
      <div className="container col s12" style={{ display: "block" }}>
        <h3 className="white-text darken-2 center">
          Add Your
          <span className="black-text darken-2"> Own Recipes</span>
        </h3>
        <br />
        <div className="col s12 m6">
          <div className="card-panel grey lighten-4 grey-text-darken-4 z-depth-0">
            <form>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="Title"
              />
              <input
                type="text"
                name="ingredients"
                value={this.state.ingredients}
                onChange={this.handleChange}
                placeholder="Ingredients (comma separated)"
              />
              <textarea
                name="steps"
                value={this.state.steps}
                onChange={this.handleChange}
                placeholder="Steps"
                rows="20"
              />
              <input
                type="text"
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
                placeholder="Add Image"
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
        </div>
      </div>
    );
  }
}
