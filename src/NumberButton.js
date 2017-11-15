import React from 'react';

const NumberButton = props => {
  const executeButtonClick = () => props.curNumClickHandler(props.num);
  return (
    <button onClick={executeButtonClick}>
      {props.num}
    </button>
  );
};

export default NumberButton;
