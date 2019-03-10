import React from "react";
import { Card, CardTitle } from "react-materialize";
import "./App.css";
class Recipes extends React.Component {
  state = {
    isLoading: false,
    recipes: []
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://recipe-api-123.herokuapp.com/recipes")
      .then(response => response.json())
      .then(recipes => {
        console.log(recipes.recipes[0].title);
        this.setState({
          recipes: recipes.recipes,
          isLoading: false
        });
      });
  }
  render() {
    if (!this.state.isLoading) {
      return this.state.recipes.map(recipe => (
        <div className="app-header">
          <div key={recipe._id} className="container brown-text ">
            <Card
              className="col s12 m6 brown-text"
              header={<CardTitle reveal image={recipe.image} waves="light" />}
              title={recipe.title}
              reveal={
                <ul>
                  <li>
                    <h4>{recipe.title}</h4>
                    <h5 className="brown-text darken-4">Ingredients: </h5>

                    {recipe.ingredients.map(ingredients => (
                      <li>{ingredients}</li>
                    ))}
                  </li>
                  <li>
                    <h5 className="brown-text darken-4">Steps: </h5>

                    {recipe.steps.map(step => (
                      <li>{step}</li>
                    ))}
                  </li>
                </ul>
              }
            />
          </div>
        </div>
      ));
    } else
      return (
        <div className="progress brown lighten-3">
          <div className="indeterminate brown darken-3" />

        </div>
      );
  }
}

export default Recipes;
