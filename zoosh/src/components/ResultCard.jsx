import React from "react";
import "./ResultCard.css";
import CoverImg from "./../img/mov.jpg";

const ResultCard = props => {
  const { result } = props;

  return (
    <div className="card my-card">
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
        <p className="trim">{result.Plot}</p>
      </div>
    </div>
  );
};

export default ResultCard;
