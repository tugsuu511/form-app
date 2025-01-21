import React from "react";

const StepOne = (props) => {
  const { handleNextStep, handleBackStep } = props;
  return (
    <div>
      step one <button onClick={handleNextStep}>next</button>
      <button onClick={handleBackStep}>back</button>
    </div>
  );
};

export default StepOne;
