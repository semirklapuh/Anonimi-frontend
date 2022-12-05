import React from "react";
import Showcase from "./Showcase";
import Hero from "./WelcomePage";

const Main = () => {
  return (
    <div className="main">
      <div>
        <Hero />
      </div>

      <div>
        <Showcase />
      </div>
    </div>
  );
};

export default Main;
