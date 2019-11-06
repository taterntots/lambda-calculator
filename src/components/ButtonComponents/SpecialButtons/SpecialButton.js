import React from "react";

const SpecialButton = props => {
  // console.log(props);
  return (
    <button className='specialButton'>
      {props.button}
    </button>
  );
};
export default SpecialButton;