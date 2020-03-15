import React, { Component } from "react";
import axios from 'axios';

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
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=529dae3d&t=${this.state.movie}&plot=full`)
    .then(response => {
      this.props.store(response);
    })
    .catch(error => {
      return console.log('omdbapi call error: ', error.message)
    }) 

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
