import React from 'react';

const SubmitButton = ({name}) => {
  return (
    <button
    className={name}
    >
      {name}
    </button>
  );
};

export default SubmitButton;