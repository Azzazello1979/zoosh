import React from "react";
import ResultCard from "./ResultCard";

const Listing = props => {
  const { results } = props;

  const remove = id => {
    props.remove(id);
  }

  const addWiki = (id, wikiArray) => {
    //console.log('Listing.jsx: ', wikiArray);
    props.addWiki(id, wikiArray);
  }

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
              return <ResultCard result={result} key={result.imdbID} remove={remove} addWiki={addWiki}/>;
            })}
          </div>
        </div>
      </div>
    );
}

export default Listing;
