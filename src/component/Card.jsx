import React from "react";
import * as classes from "./card.module.css";

function Card({ image, alt, children }) {
  return (
    <div className="card">
      {image && (
        <div className="card-image ">
          <figure>
            <img src={image} alt={alt} className="img-fluid" />
          </figure>
        </div>
      )}

      <div className="card-content">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Card;
