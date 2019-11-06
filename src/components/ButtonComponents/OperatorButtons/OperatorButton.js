import React from "react";

const OperatorButton = props => {
  console.log(props);
  return (
    <button className='operatorButton'>
      {props.button.char}
    </button>
  );
};
export default OperatorButton;