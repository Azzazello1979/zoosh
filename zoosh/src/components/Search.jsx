import React, { Component } from "react";

class Search extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <form>
          <div className="input-field">
            <input type="text" name="movie" placeholder="enter movie title" />
          </div>
          <div className="input-field">
            <button type="submit" name="submit" className="btn pulse">Search Movies</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
