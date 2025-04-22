import React from "react";

const Synonyms = (props) => {
  //   console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <span className="Synonyms">
        <strong> Synonyms: </strong>
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
