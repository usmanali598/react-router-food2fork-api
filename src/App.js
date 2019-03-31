import React, { Component } from 'react';
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import './App.css';

const API_KEY = "c2bc3e95178172b9b0734c2b3e1a8b44";
class App extends Component
{
  state = {
    recipes: []
  }


  getRecipe = async ( e ) =>
  {
    // const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    // const api_call = await fetch( `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${ API_KEY }&q=${ recipeName }&count=10` );
    const api_call = await fetch( `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${ API_KEY }&count=10` );

    const data = await api_call.json();
    this.setState( { recipes: data.recipes } );
    console.log( data );
  }
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={ this.getRecipe } />
        {/* <Recipes recipes={ this.state.recipes } /> */ }
      </div>
    );
  }
}

export default App;
