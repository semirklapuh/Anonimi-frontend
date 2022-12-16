import React from "react";
import Features from "./FeaturesPage";
import Showcase from "./Showcase";
import Hero from "./WelcomePage";

const Main = () => {
  return (
    <div className="main">
      <div>
        <Hero />
      </div>
      <>
        <Features />
      </>
      <div>
        <Showcase />
      </div>
    </div>
  );
};

export default Main;
