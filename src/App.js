import React, { Component } from 'react';
import Form from './Form'
import './App.css';
import { async } from 'q';

const API_KEY = "7c11c672aaf4adac74fdf82c190dbb14";

class App extends Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`);
    
    const data = await api_call.json();

    this.setState({ recipes: data.recipes});

    console.log(this.state.recipes)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>

        { this.state.recipes.map((recipe) => {
          return <p key={recipe.recipe_id}>{ recipe.title }</p>
        }) }
      </div>
    );
  }
}

export default App;
