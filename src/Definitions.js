import React from "react";

//NEED TO LOOP THROUGH THE DEF ONCE GETTING WORD
const Definitions = (props) => {
  return (
    <div className="Definitions">
      {props.def}
      {/* <h1>DEF COMPONENT</h1> */}
    </div>
  );
};
export default Definitions;
