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

    const herokuProxy = 'https://cors-anywhere.herokuapp.com/';
    const wikipediaServer = 'https://en.wikipedia.org/w/api.php';
    const wikiQuery = '?action=opensearch&format=json&search=';
    
    axios.get(`${herokuProxy}${wikipediaServer}${wikiQuery}"${title}"`)
    .then(wikiResponse => {
      props.addWiki(id, wikiResponse.data[3]);
    })
    .catch(error => {
      return console.log('error with wiki query: ', error.message)
    })
  }

  let wikiLinks = [];
  if(result.wikiArray === undefined){
     wikiLinks = ''         
  } else {
    wikiLinks = result.wikiArray.map((wikiLink, index) => {
      return(
        <a href={wikiLink} target="_blank" rel="noopener noreferrer"><li key={ `${wikiLink}_${index}` }>{wikiLink.replace('https://en.wikipedia.org/wiki/', '')}</li></a>
      )
    })
  }

  let poster = <img src={result.Poster} alt="movie poster" />;
  if(result.Poster === 'N/A'){
    poster = '';
  }

  return (
    <div className="card my-card">
      <button className="btn remove" onClick={ () => remove(result.imdbID) }>remove</button>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator my-image" src={CoverImg} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          <p className="my-title">{result.Title}</p>
          <i className="material-icons right">more_vert</i>
        </span>
        <p>Year: {result.Year} Genre: {result.Genre}</p>
        <p>Director: {result.Director}</p>
        <p>Actors: {result.Actors}</p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          <i className="material-icons right">close</i>
          <p className="my-title">{result.Title}</p>
          <div className="poster">{poster}</div>
        </span>
        <p>{result.Plot}</p>
        <span>
          <button type="button" className="btn" onClick={() => moreInfo(result.imdbID, result.Title) }>More about {result.Title} by wikipedia</button>
        </span>
        <div className="wikiLinks">
          <ul>
            {wikiLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
