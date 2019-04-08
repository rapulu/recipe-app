import React from "react";

let Form = props => (
  <form onSubmit={props.getRecipe} style={{ marginBottom: "2em" }}>
    <input type="text" name="recipeName" />
    <button>Search</button>
  </form>
);

export default Form;
