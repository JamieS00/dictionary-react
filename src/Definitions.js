import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

//NEED TO LOOP THROUGH THE DEF ONCE GETTING WORD
const Definitions = (props) => {
  //   console.log("Props from results comp:", props.meaning);

  return (
    <div className="Definitions">
      <br />
      <br />

      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>
          <strong>Definitions: </strong> {props.meaning.definition}
          {/* <br /> */}
          <Example ex={props.meaning.example} />
        </div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
};
export default Definitions;
