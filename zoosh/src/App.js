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
    current.unshift(result);
    this.setState({
      results: current
    });
    console.log("App.js movies: ", this.state.results);
    console.log("App.js movieArr length: ", this.state.results.length);
  };

  removeMovie = id => {
    const currentMovies = [...this.state.results];
    const updatedMovies = currentMovies.filter(movie => movie.imdbID !== id);
    this.setState({
      results: updatedMovies
    });
  };

  addWiki = (id, wikiArray) => {
    const currentMovies = [...this.state.results];
    currentMovies.forEach(cMovie => {
      if(cMovie.imdbID === id){
        cMovie['wikiArray'] = wikiArray
      }
    });
    this.setState({
      results: currentMovies
    });
    console.log('App.js currentMovies: ', this.state.results);
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
