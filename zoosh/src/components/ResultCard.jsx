import React from "react";
import "./ResultCard.css";
import CoverImg from "./../img/mov.jpg";
import axios from 'axios';

const ResultCard = props => {
  const { result } = props;

  const remove = id => {
    props.remove(id);
  }

  const moreInfo = (id, title) => {
    //console.log(`moreInfo: id: ${id} title: ${title}`);

    const herokuProxy = 'https://cors-anywhere.herokuapp.com/';
    const wikipediaServer = 'https://en.wikipedia.org/w/api.php';
    const wikiQuery = '?action=opensearch&format=json&search=';
    
    axios.get(`${herokuProxy}${wikipediaServer}${wikiQuery}"${title}"`)
    .then(wikiResponse => {
      console.log(wikiResponse)
    })
    .catch(error => {
      return console.log('error with wiki query: ', error.message)
    })
  }

  return (
    <div className="card my-card">
      <button className="btn remove" onClick={ () => remove(result.imdbID) }>remove</button>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator my-image" src={CoverImg} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {result.Title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          Year: {result.Year} Genre: {result.Genre}
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {result.Title}
          <i className="material-icons right">close</i>
        </span>
        <p>{result.Plot}</p>
        <span>
          <button type="button" onClick={() => moreInfo(result.imdbID, result.Title) }>More about {result.Title} by wikipedia</button>
        </span>
      </div>
    </div>
  );
};

export default ResultCard;
