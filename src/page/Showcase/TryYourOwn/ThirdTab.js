import React from "react";
import { Upload } from "./ImageOperations";
import "./style.css";

const ThirdTab = () => {
  return (
    <div className="ThirdTab">
      <Upload
        onDrop={(files) => {
          console.log("pokusaj");
        }}
      />
    </div>
  );
};

export default ThirdTab;
