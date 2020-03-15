import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Listing from "./components/Listing";

class App extends Component {
  render() {
    return (
      <div className="App container">
            <Search />
            <Listing />
      </div>
    );
  }
}

export default App;
