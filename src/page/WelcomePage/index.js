import React from "react";
import { Nav } from "react-bootstrap";
import videoBg from "../../assets/videoBg.mp4";
import "./style.css";

const Hero = () => {
  return (
    <div>
      <div className="overlay">
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <div>
            <h1 className="title">Anonymizer like no other</h1>
          </div>
          <div>
            <h5 className="subtitle">
              Perfect tool to anonymize your images or video in a few easy steps
            </h5>
          </div>
          <div>
            <p className="text-box">
              Aliquam amet, vitae erat cursus amet. Feugiat porttitor habitant
              blandit eget diam ornare pharetra, at nunc. Faucibus ac bibendum
              dui suspendisse fusce amet, pharetra risus quis. In fames
              facilisis nec porttitor in. Vel, tincidunt vitae, lacus, placerat
              pharetra, mauris. Pellentesque volutpat lacinia pharetra feugiat
              velit. <br></br>
              <br></br>
              Compliant with latest privacy standards GDPR and CCPA.
            </p>
          </div>
          <div className="button-row">
            <Nav.Link href="showcase">
              <button className="btn-demo">Demo</button>
            </Nav.Link>

            <button className="btn-contact">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
