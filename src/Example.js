import React from "react";
import "./Example.css";

const Example = (props) => {
  // console.log(props.ex);
  if (props.ex) {
    return (
      <div className="Example">
        {/* <strong> Example: </strong> */}
        {props.ex}
      </div>
    );
  } else {
    return null;
  }
};
export default Example;
