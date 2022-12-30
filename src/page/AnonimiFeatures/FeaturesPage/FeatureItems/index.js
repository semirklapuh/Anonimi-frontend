import React, { useState } from "react";
import "./style.css";

import aioriginal from "./AI/aioriginal.png";
import aiblur from "./AI/aiblur.png";
import aipix from "./AI/aipix.png";
import aidn from "./AI/aidn.png";
import { Button } from "react-bootstrap";
import { Upload } from "./Uploads/FaceUpload";
import { UploadCar } from "./Uploads/CarUpload";

export const AboutAI = () => {
  const [demo, setDemo] = useState(false);

  const handleChangeDemo = () => {
    setDemo(true);
  };
  return (
    <div id="about-ai" className="about-ai">
      <div className="about-ai-header">
        <h1 className="ai-title">ANONIMI AI</h1>
        <p className="ai-text">Explore anonymization modes in detail </p>
      </div>

      <div id="ai-face">
        <div className="left-side">
          <h4 className="subsection-title">Face anonimization</h4>
          <div className="subsection-p">
            <h5 className="subsection-title-subtitle">
              Detect and anonymize faces
            </h5>
            <p className="subsection-text">
              Cursus neque mauris nullam aliquam. Enim sagittis placerat id sit
              placerat consectetur phasellus congue. Aenean arcu enim tempus
              suspendisse at justo. Quis nunc vel quis feugiat purus. Aliquam
              imperdiet dui at mauris egestas ornare purus. Nulla sit posuere
              nunc arcu laoreet aliquam maecenas. Ut morbi auctor diam mus enim.
              Magnis id a volutpat volutpat ante malesuada. Cursus at quis arcu
              sed leo tristique morbi. Mauris in sit eu nulla accumsan. Euismod
              rutrum dolor proin urna ornare sed nibh. Mauris arcu in erat a
              laoreet egestas odio nunc diam. Vitae arcu aliquam proin lacus
              sodales ultrices massa cras. A vivamus sed eget neque nec volutpat
              elit. Imperdiet feugiat aliquam ullamcorper scelerisque accumsan.
              Magna lorem ultrices nunc sit turpis turpis libero.
            </p>
          </div>
          <div className="subsection-p">
            <h5 className="subsection-title-subtitle">
              Modes: Blur, Pixelated, Deep Natural
            </h5>
            <p className="subsection-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore m agna aliqua. Ut
              morbi auctor diam mus enim. Magnis id a volutpat volutpat ante
              malesuada. Cursus at quis arcu sed leo tristique morbi. Mauris in
              sit eu nulla accumsan.
            </p>
            {demo ? (
              ""
            ) : (
              <Button onClick={() => handleChangeDemo()}>Try Demo</Button>
            )}
          </div>
        </div>
        <div className="right-side">
          {demo ? (
            <>
              <Upload
                onDrop={(files) => {
                  console.log(files);
                }}
              />
            </>
          ) : (
            <>
              <div className="ai-image-row">
                <div className="ai-image-box">
                  <img src={aioriginal} alt="ai" className="ai-image" />
                  <h5 className="subsection-title-subtitle">Original</h5>
                </div>
                <div className="ai-image-box">
                  <img src={aidn} alt="ai" className="ai-image" />
                  <h5 className="subsection-title-subtitle">Deep Natural</h5>
                </div>
              </div>
              <div className="ai-image-row">
                <div className="ai-image-box">
                  <img src={aiblur} alt="ai" className="ai-image" />
                  <h5 className="subsection-title-subtitle">Blur</h5>
                </div>
                <div className="ai-image-box">
                  <img src={aipix} alt="ai" className="ai-image" />
                  <h5 className="subsection-title-subtitle">Pixelated</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div id="ai-cars">
        <div className="left-side">
          {demo ? (
            <>
              <UploadCar
                onDrop={(files) => {
                  console.log(files);
                }}
              />
            </>
          ) : (
            <>
              <div className="ai-image-row">
                <div className="ai-image-box">
                  <img src={aioriginal} alt="ai" className="ai-image" />
                  <h5 className="subsection-title-subtitle">Original</h5>
                </div>
                <div className="ai-image-box">
                  <img src={aidn} alt="ai" className="ai-image" />
                  <h5 className="subsection-title-subtitle">Deep Natural</h5>
                </div>
              </div>
              <div className="ai-image-row">
                <div className="ai-image-box">
                  <img src={aiblur} alt="ai" className="ai-image" />
                  <h5 className="subsection-title-subtitle">Blur</h5>
                </div>
                <div className="ai-image-box">
                  <img src={aipix} alt="ai" className="ai-image" />
                  <h5 className="subsection-title-subtitle">Pixelated</h5>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="right-side">
          <h4 className="subsection-title-car">Licence plates anonymization</h4>
          <div className="subsection-p">
            <h5 className="subsection-title-subtitle">
              Detect and anonymize faces
            </h5>
            <p className="subsection-text">
              Cursus neque mauris nullam aliquam. Enim sagittis placerat id sit
              placerat consectetur phasellus congue. Aenean arcu enim tempus
              suspendisse at justo. Quis nunc vel quis feugiat purus. Aliquam
              imperdiet dui at mauris egestas ornare purus. Nulla sit posuere
              nunc arcu laoreet aliquam maecenas. Ut morbi auctor diam mus enim.
              Magnis id a volutpat volutpat ante malesuada. Cursus at quis arcu
              sed leo tristique morbi. Mauris in sit eu nulla accumsan. Euismod
              rutrum dolor proin urna ornare sed nibh. Mauris arcu in erat a
              laoreet egestas odio nunc diam. Vitae arcu aliquam proin lacus
              sodales ultrices massa cras. A vivamus sed eget neque nec volutpat
              elit. Imperdiet feugiat aliquam ullamcorper scelerisque accumsan.
              Magna lorem ultrices nunc sit turpis turpis libero.
            </p>
          </div>
          <div className="subsection-p">
            <h5 className="subsection-title-subtitle">
              Modes: Blur, Pixelated, Deep Natural
            </h5>
            <p className="subsection-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore m agna aliqua. Ut
              morbi auctor diam mus enim. Magnis id a volutpat volutpat ante
              malesuada. Cursus at quis arcu sed leo tristique morbi. Mauris in
              sit eu nulla accumsan.
            </p>
            {demo ? (
              ""
            ) : (
              <Button onClick={() => handleChangeDemo()}>Try Demo</Button>
            )}
          </div>
        </div>
      </div>

      <div id="ai-doc">
        <h5 className="doc-title">Documentation and External links</h5>
        <p className="doc-p">Anonimization FACE Dummy Document.pdf</p>
        <p className="doc-p">Anonimization LICENCE PLATES Dummy Document.pdf</p>
        <p className="doc-p">Blur Pixel Deep Natural Dummy Document.pdf</p>
        <p className="doc-p">
          Anonimi Tips&Tricks - Useful to know before you start.pdf
        </p>
      </div>
    </div>
  );
};
