import React from "react";

const NumberButton = props => {
  console.log(props);
  return (
    <button onClick={() => props.number()}>
      {props.button.number}
    </button>
  );
};
