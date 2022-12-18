import React from "react";
import Features from "./FeaturesPage";
import Showcase from "./Showcase";
import Hero from "./WelcomePage";

const Main = () => {
  return (
    <div className="main">
      <div className="section">
        <Hero />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Showcase />
      </div>
    </div>
  );
};

export default Main;
