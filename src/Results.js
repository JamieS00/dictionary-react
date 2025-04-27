import React from "react";
import Definitions from "./Definitions";
import "./Results.css";

const Results = (props) => {
  // console.log("Results from dict :", props.results);

  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1>{props.results.word}</h1>
          <h2>{props.results.phonetic}</h2>
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
