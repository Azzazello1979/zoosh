import React from "react";
import "./ResultCard.css";
import CoverImg from "./../img/mov.jpg";

const ResultCard = props => {
  const { result } = props;

  const remove = id => {
    props.remove(id);
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
          <a href="https://en.wikipedia.org/wiki/Intacto" target="_blank">
            Read more about {result.Title} on wikipedia...
          </a>
        </span>
      </div>
    </div>
  );
};

export default ResultCard;
