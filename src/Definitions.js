import React from "react";
import Synonyms from "./Synonyms";

//NEED TO LOOP THROUGH THE DEF ONCE GETTING WORD
const Definitions = (props) => {
  //   console.log("Props from results comp:", props.meaning);

  return (
    <div className="Definitions">
      <br />
      <br />

      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <strong>Definitions: </strong> {props.meaning.definition}
        <br />
        <strong>Example: </strong> {props.meaning.example}
        <br />
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
};
export default Definitions;
