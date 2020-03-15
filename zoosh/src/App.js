import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Listing from "./components/Listing";

class App extends Component {
  state = {
    results: []
  }

  storeResult = result => {
    const current = [...this.state.results];
    current.push(result);
    this.setState({
      results: current
    });
    console.log('App.js: ', this.state.results);
  }

  render() {
    return (
      <div className="App container">
            <Search store={this.storeResult} />
            <Listing results={this.state.results} />
      </div>
    );
  }
}

export default App;
