import React from "react";
import GetData from "./GetData";
import "./style.css";

const Tasks = () => {
  return (
    <div className="tasks">
      <h2>Tasks</h2>

      <div></div>

      <div className="getdata-div">
        <GetData />
      </div>
    </div>
  );
};

export default Tasks;
