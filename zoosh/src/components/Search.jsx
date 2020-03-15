import React, { Component } from "react";

class Search extends Component {
  state = {
    movie: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    // call IMDB api

    this.setState({
      movie: ""
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={ this.handleSubmit }>
          <div className="input-field">
            <input type="text" name="movie" placeholder="enter movie title" onChange={ this.handleChange } value={ this.state.movie }/>
          </div>
          <div className="input-field">
            <button type="submit" className="btn pulse">Search Movies</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
