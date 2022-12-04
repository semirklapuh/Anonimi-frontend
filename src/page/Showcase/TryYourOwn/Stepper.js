import "./style.css";
import { Stepper, Step } from "react-form-stepper";
import { useState } from "react";

export const Steps = () => {
  const [goSteps, setGoSteps] = useState(0);

  return (
    <div>
      {goSteps === 0 && <div></div>}
      {goSteps === 1 && <div></div>}
      {goSteps === 2 && <div></div>}
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} label="Select ovject type" />
        <Step onClick={() => setGoSteps(1)} label="Select anonymization" />
        <Step onClick={() => setGoSteps(2)} label="Start anonymizing" />
      </Stepper>
    </div>
  );
};
