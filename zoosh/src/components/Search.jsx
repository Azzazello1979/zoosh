import React, { Component } from "react";
import axios from "axios";
import progressAnim from "./../img/progress.gif";

class Search extends Component {
  state = {
    movie: ""
  };

  progress = 'my-progress-off';

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.progress = 'my-progress-on';
    axios
      .get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=529dae3d&t=${this.state.movie}&plot=full`
      )
      .then(response => {
        this.progress = 'my-progress-off';
        this.props.store(response.data);
      })
      .catch(error => {
        return console.log("omdbapi call error: ", error.message);
      });

    this.setState({
      movie: ""
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="movie"
              placeholder="enter movie title"
              onChange={this.handleChange}
              value={this.state.movie}
            />
          </div>
          <div className="input-field">
            <button type="submit" className="btn pulse">
              Search Movies
            </button>
          </div>
          <div>
            <img className={this.progress} src={progressAnim} alt="loading" />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
