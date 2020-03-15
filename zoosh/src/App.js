import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Listing from "./components/Listing";

class App extends Component {
  state = {
    results: []
  }

  storeResults = results => {
    this.setState({
      results
    });
    console.log('App.js: ', this.state.results);
  }

  render() {
    return (
      <div className="App container">
            <Search store={this.storeResults} />
            <Listing />
      </div>
    );
  }
}

export default App;
