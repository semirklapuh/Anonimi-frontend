import React from "react";
import "./style.css";
import TabsBox from "./Tabs/TabComponents/TabsBox";

const Showcase = () => {
  return (
    <div id="showcase-section" className="showcase-section">
      <div className="showcase-header">
        <h1>Showcase</h1>
        <h5>Use our preview examples to see what Anonimi is all about</h5>
        <div>
          <TabsBox />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
