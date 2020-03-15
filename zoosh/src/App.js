import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Listing from "./components/Listing";

class App extends Component {
  state = {
    results: [],
    movIDs: []
  };

  storeResult = result => {
    let currentMovies = [...this.state.results];
    let currentMovIDs = [...this.state.movIDs];

    if (!currentMovIDs.includes(result.imdbID)) {
      currentMovIDs.push(result.imdbID);
      currentMovies.unshift(result);
    } else {
      console.log("this movie is already stored, skipping");
    }

    this.setState({
      results: currentMovies,
      movIDs: currentMovIDs
    });
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
      if (cMovie.imdbID === id) {
        cMovie["wikiArray"] = wikiArray;
      }
    });
    this.setState({
      results: currentMovies
    });
  };

  render() {
    return (
      <div className="App container">
        <Search store={this.storeResult} />
        <Listing
          results={this.state.results}
          remove={this.removeMovie}
          addWiki={this.addWiki}
        />
      </div>
    );
  }
}

export default App;
