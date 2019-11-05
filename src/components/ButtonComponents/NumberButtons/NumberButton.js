import React from "react";

const NumberButton = props => {
  // console.log(props);
  return (
    <button className='numberButton'>
      {props.button}
    </button>
  );
};
export default NumberButton;

// onClick={() => props.number()}