import React, { Component } from "react";

class Search extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <form>
          <input type="text" name="movie" placeholder="enter movie title" />
          <button type="submit" name="submit" className="btn pulse">Search Movies</button>
        </form>
      </div>
    );
  }
}

export default Search;
