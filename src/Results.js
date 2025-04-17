import React from "react";
import Definitions from "./Definitions";

const Results = (props) => {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map((def, index) => {
          return (
            <div key={index}>
              <Definitions meaning={def} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};
export default Results;
