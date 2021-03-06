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
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch( `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${ API_KEY }&q=${ recipeName }&count=10` );

    const data = await api_call.json();
    this.setState( { recipes: data.recipes } );
    console.log( this.state.recipes );
  }
  componentDidMount = () =>
  {
    //Comment this function for running first time, after loading app, comment it out
    const json = localStorage.getItem( "recipes" );
    const recipes = json !== null ? JSON.parse( json ) : this.state.recipes;
    this.setState( { recipes } );
  }
  componentDidUpdate = () =>
  {
    const recipes = JSON.stringify( this.state.recipes );
    localStorage.setItem( "recipes", recipes );
  }
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={ this.getRecipe } />
        <Recipes recipes={ this.state.recipes } />
      </div>
    );
  }
}

export default App;
