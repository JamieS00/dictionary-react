import React from "react";

//NEED TO LOOP THROUGH THE DEF ONCE GETTING WORD
const Definitions = (props) => {
  //   console.log("Props from results comp:", props.meaning);

  return (
    <div className="Definitions">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <p> {props.meaning.example}</p>
    </div>
  );
};
export default Definitions;
