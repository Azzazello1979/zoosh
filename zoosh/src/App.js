import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Listing from "./components/Listing";

class App extends Component {
  state = {
    results: []
  };

  storeResult = result => {
    const current = [...this.state.results];
    current.push(result);
    this.setState({
      results: current
    });
    console.log("App.js: ", this.state.results);
  };

  removeMovie = id => {
    const currentMovies = [...this.state.results];
    const updatedMovies = currentMovies.filter(movie => movie.imdbID !== id);
    this.setState({
      results: updatedMovies
    });
  };

  addWiki = (id, wikiArray) => {
    console.log(`App.js: movie id is ${id} and wikiArray is ${wikiArray}`);
  }

  render() {
    return (
      
        <div className="App container">
          <Search store={this.storeResult} />
          <Listing results={this.state.results} remove={this.removeMovie} addWiki={this.addWiki} />
        </div>
      
    );
  }
}

export default App;
