import React, { Component } from "react";
import { Link } from "react-router-dom";

const API_KEY = "7c11c672aaf4adac74fdf82c190dbb14";

class Recipe extends Component {
  state = {
    recipeData: []
  };

  componentDidMount = async e => {
    const { params } = this.props.match;
    const api_call = await fetch(
      `https://www.food2fork.com/api/get?key=${API_KEY}&rId=${params.id}`
    );

    const data = await api_call.json();

    this.setState({ recipeData: data.recipe });

    console.log(this.state.recipeDAta);
  };

  render() {
    const recipe = this.state.recipeData;
    return (
      <div className="container">
        {this.state.recipeData.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p classNam="active-recipe__website">
              Website: <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
