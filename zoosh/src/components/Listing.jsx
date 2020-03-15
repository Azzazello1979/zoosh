import React from "react";
import ResultCard from "./ResultCard";

const Listing = props => {
  const { results } = props;
    return (
      <div className="container">
        <h6>
          {results.length > 0
            ? `movie results: ${results.length}`
            : "search above..."}
        </h6>
        <div className="row">
          <div className="col s10 offset-s1">
            {results.map(result => {
              return <ResultCard result={result} key={result.imdbID} />;
            })}
          </div>
        </div>
      </div>
    );
}

export default Listing;
