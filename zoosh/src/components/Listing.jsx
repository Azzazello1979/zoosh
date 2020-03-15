import React, { Component } from "react";
import ResultCard from "./ResultCard";

class Listing extends Component {
  state = {
    results: [
        {
            id: 1,
            title: "Drakula Returns",
            desc: "...blahblahblah...",
            coverImg: "img/mov.jpg"
          },
          {
            id: 2,
            title: "Toy Story 87",
            desc: "...blahblahblah...",
            coverImg: "img/mov.jpg"
          },
          {
            id: 3,
            title: "Shutter Islands",
            desc: "...blahblahblah...",
            coverImg: "img/mov.jpg"
          }
    ]
  };

  render() {
    return (
      <div className="container center">
          <h6>{ this.state.results.length > 0 ? (`movie results: ${this.state.results.length}`) : ('search above...') }</h6>
        {this.state.results.map(result => {
          return <ResultCard result={result} key={result.id} />;
        })}
      </div>
    );
  }
}

export default Listing;
