import React from "react";
import "./Images.css";

const Images = (props) => {
  if (props.photos) {
    return (
      <section className="Images">
        <div className="row">
          {props.photos.map((i, index) => {
            return (
              <div className="col-4" key={index}>
                <img src={i.src.landscape} alt={i.alt} className="img-fluid" />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
};
export default Images;
