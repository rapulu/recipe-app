import React from "react";

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div
            className="col-md-4"
            key={recipe.recipe_id}
            style={{ marginBottom: "2em" }}
          >
            <div className="recipes__box">
              <img
                className="recipe__box-img"
                src={recipe.image_url}
                alt={recipe.image_url}
              />
              <div className="recipe__text">
                <h5 className="recipes_title">{recipe.title}</h5>
                <p className="recipes__subtitle">
                  Publisher: <span>{recipe.publisher}</span>
                </p>
              </div>
              <button className="recipe_buttons">View recipe</button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
