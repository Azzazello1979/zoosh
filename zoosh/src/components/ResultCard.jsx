import React from "react";
import "./ResultCard.css";


const ResultCard = props => {
  const { result } = props;

  
  return (
    <div className="card my-card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator my-image" src={process.env.PUBLIC_URL + result.coverImg} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          { result.title }
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <a href="#">This is a link</a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          { result.title }
          <i className="material-icons right">close</i>
        </span>
        <p className="trim">
          { result.desc }
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
