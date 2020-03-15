import React from "react";
import ResultCard from "./ResultCard";

const Listing = props => {
  const { results } = props;

  console.log('Listing.jsx results: ', results);

  let note = results.length > 0 ? ('results: ' + results.length) : 'search above';

  const remove = id => {
    props.remove(id);
  }

  const addWiki = (id, wikiArray) => {
    props.addWiki(id, wikiArray);
  }
  
    return (
      <div className="container">
        <p>{note}</p>
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
