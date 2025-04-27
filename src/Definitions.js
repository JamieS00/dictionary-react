import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Definitions.css";

//NEED TO LOOP THROUGH THE DEF ONCE GETTING WORD
const Definitions = (props) => {
  //   console.log("Props from results comp:", props.meaning);

  return (
    <div className="Definitions">
      <br />
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>
          <p> {props.meaning.definition}</p>

          <Example ex={props.meaning.example} />
        </div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
};
export default Definitions;
