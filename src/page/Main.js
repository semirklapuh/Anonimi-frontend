import React from "react";
import AnonimiAI from "./AnonimiAI";
import FAQ from "./FaQ";
import Features from "./FeaturesPage";
import { Footer } from "./Footer";
import Industries from "./Industries";
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
      <div>
        <AnonimiAI />
      </div>
      <div>
        <Industries />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
