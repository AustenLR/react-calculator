import React from 'react';

const OperationButton = props => {
  const executeButtonClick = () => props.operationClickHandler(props.operation);
  return (
    <button onClick={executeButtonClick}>
      {props.operation}
    </button>
  );
};

export default OperationButton;
