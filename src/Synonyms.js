import React from "react";
import "./Synonyms.css";

const Synonyms = (props) => {
  //   console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <span className="Synonyms">
        {/* <strong> Synonyms: </strong> */}
        <strong> Similar: </strong>
        {props.synonyms.map((i, index) => {
          return (
            <span key={index}>
              {i} {"     "}
            </span>
          );
        })}
      </span>
    );
  } else {
    return null;
  }
};
export default Synonyms;
