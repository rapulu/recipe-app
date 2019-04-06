import React from "react";

let Form = props => (
  <form onSubmit={props.getRecipe}>
    <input type="text" name="recipeName" />
    <button>Search</button>
  </form>
);

export default Form;
