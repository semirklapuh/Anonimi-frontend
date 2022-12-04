import React from "react";
import Dropdowns from "./Dropdowns/Dropdowns";
import "./style.css";

import { Upload } from "./upload";

const ThirdTab = () => {
  return (
    <div className="ThirdTab">
      <Upload
        onDrop={(files) => {
          console.log("uspjesno");
        }}
      />
      <div>
        <Dropdowns />
      </div>
    </div>
  );
};

export default ThirdTab;
