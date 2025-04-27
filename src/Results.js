import React from "react";
import Definitions from "./Definitions";

const Results = (props) => {
  // console.log("Results from dict :", props.results);

  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1>{props.results.word}</h1>
          <h3>{props.results.phonetic}</h3>
        </section>
        {props.results.meanings.map((i, index) => {
          return (
            <div key={index}>
              <Definitions meaning={i} />
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
