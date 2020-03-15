import React, { Component } from "react";
import ResultCard from "./ResultCard";



class Listing extends Component {
  state = {
    results: [
      {
        id: 1,
        title: "Drakula Returns",
        desc: "...blahblahblah...",
        
      },
      {
        id: 2,
        title: "Toy Story 87",
        desc: "...blahblahblah...",
        
      },
      {
        id: 3,
        title: "Shutter Islands",
        desc: "...blahblahblah...",
        
      }
    ]
  };

  updateResults = results => {
    this.setState({
      results
    })
  }

  render() {
    return (
      <div className="container">
        <h6>
          {this.state.results.length > 0
            ? `movie results: ${this.state.results.length}`
            : "search above..."}
        </h6>
        <div className="row">
          <div className="col s10 offset-s1">
            {this.state.results.map(result => {
              return <ResultCard result={result} key={result.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Listing;
