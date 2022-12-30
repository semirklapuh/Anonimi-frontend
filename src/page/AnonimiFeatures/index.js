import React from "react";
import "./style.css";

import Dashboard from "./Dashboard.png";
import Watermark from "./Watermark.png";
import Features1 from "./FeaturesPage";
import { Button } from "react-bootstrap";

export const AnonimiFeatures = () => {
  return (
    <div id="anonimi-features">
      <div className="an-f-header">
        <h1 className="an-f-title">Anonimi AI</h1>
        <p className="an-f-p">
          Our full list of features and services explained in details
        </p>
      </div>
      <div className="an-platfrom">
        <h4 className="an-p-title">Anonimi platform</h4>
        <p className="an-p-p">
          Web application built to maximize your efficiency and save time
        </p>
        <div className="an-platform-content">
          <div className="left-side">
            <div className="an-p-1">
              <li className="an-list">All in one place</li>
              <p className="an-list-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="an-p-2">
              <li className="an-list">All in one place</li>
              <p className="an-list-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="an-p-1">
              <li className="an-list">All in one place</li>
              <p className="an-list-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="an-p-2">
              <li className="an-list">All in one place</li>
              <p className="an-list-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="right-side">
            <img src={Dashboard} className="an-platform-img" alt="dashboard" />
            <img
              src={Watermark}
              className="an-platform-img-1"
              alt="dashboard"
            />
          </div>
        </div>
      </div>
      <div>
        <Features1 />
      </div>
      <div className="an-api-access">
        <h3 className="an-api-access-title">API access</h3>
        <div className="an-api-access-row">
          <div className="api-left">
            <h5 className="api-subtitle">How it works?</h5>
            <p className="api-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Vel, tincidunt
              vitae, lacus, placerat pharetra, mauris. Pellentesque volutpat
              lacinia pharetra feugiat velit adipiscing sed eu. Arcu est, sed
              metus, semper nunc at eget. Viverra magna diam eget hendrerit
              augue sagittis consectetur ac velit. Nisi, orci, tempus id
              dictumst vestibulum mattis.
            </p>
          </div>
          <div className="api-right">
            <h5 className="api-subtitle">Technical overview</h5>
            <li className="api-l">REST Architecture</li>
            <li className="api-l">
              Supported programing languages: Python, PHP, Node.js,.Net,Java
            </li>
            <li className="api-l">JSON data format</li>
          </div>
        </div>
        <h5 className="api-subtitle">Get started in no time</h5>
        <p className="api-b">1. Create your account</p>
        <p className="api-b">2. Get API credentials</p>
        <p className="api-b">3. Integrate API and use Anonimi services</p>
        <Button>Get API Documentation</Button>
      </div>

      <div id="hosting">
        <h5 className="hosting-title">Hosting and Privacy</h5>
        <p className="hosting-subtitle">
          Privacy of your data is our main concern
        </p>
        <li className="hosting-l">
          The platform that hosts the processing and the hosting are located and
          compliant with the EU privacy regulation laws
        </li>
        <li className="hosting-l">
          Anonimi meets IT security standards by making sure that requests are
          encrypted with !/!#%$ protocol
        </li>
        <li className="hosting-l">
          The blurring algorithm we apply is irreversible. Once blurred, the
          image can’t be unblurred
        </li>
        <li className="hosting-l">
          Once processed, you have the option to immediatly and permanently
          delete files. Otherwise, they will be permanently deleted after 7 days
        </li>
        <li className="hosting-l">
          Anonimi doesn't use your files for internal works or studies
        </li>
      </div>
    </div>
  );
};
