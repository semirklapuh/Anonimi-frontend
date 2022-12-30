import React from "react";
import "./style.css";
import Tasks from "./Tasks.png";
import TaskCreation from "./TaskCreation.png";
import Dashboard from "./Dashboard.png";
import Watermark from "./Watermark.png";
import Account from "./Account.png";

export const AnonimiPlatform = () => {
  return (
    <div className="anonimi-platform">
      <div className="platform-header">
        <h5 className="platform-main-title">Anonimi Platform</h5>
        <p>All-in-one tool for the ultimate anonimization experience</p>
      </div>
      <div className="task-div">
        <div className="task-row">
          <div className="tasks-info">
            <h6 className="info-title">Seamless task managment </h6>
            <p className="info-subtitle">
              Manage of all your tasks in one place
            </p>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore m agna aliqua.
            </p>
            <p className="info-subtitle">
              Preview anonimized files before downloading
            </p>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore m agna aliqua.
            </p>
          </div>
          <div className="tasks-img">
            <img src={Tasks} alt="platform" />
          </div>
        </div>
        <div className="task-row">
          <div className="tasks-img">
            <img src={TaskCreation} className="platform-img" alt="platform" />
          </div>
          <div className="tasks-info">
            <p className="info-subtitle">
              Upload a single file, in a bulk, or an archive
            </p>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore m agna aliqua.
            </p>
            <p className="info-subtitle">
              Chose between different anonymization modes
            </p>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore m agna aliqua.
            </p>
            <p className="info-subtitle">Add watermarks in few easy steps</p>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore m agna aliqua.
            </p>
          </div>
        </div>
        <div className="about-dashboard">
          <h4 className="dash-title">
            Keep track of your usage habits with Anonimi Dashboard
          </h4>
          <img src={Dashboard} alt="das" />
          <div className="task-row">
            <div className="tasks-info">
              <p className="info-subtitle">MEasily keep up with your plan</p>
              <p className="info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore m agna aliqua.
              </p>
              <p className="info-subtitle">Upload statistics - file types</p>
              <p className="info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore m agna aliqua.
              </p>
            </div>
            <div className="tasks-info">
              <p className="info-subtitle">Live track API Status</p>
              <p className="info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore m agna aliqua.
              </p>
              <p className="info-subtitle">View consumption history</p>
              <p className="info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore m agna aliqua.
              </p>
            </div>
          </div>
          <div className="about-watermark">
            <h5 className="dash-title">
              Create watermark library with customized presets{" "}
            </h5>
            <div className="task-row">
              <div className="tasks-img">
                <img src={Watermark} className="platform-img" alt="platform" />
              </div>
              <div className="tasks-info">
                <p className="info-subtitle">
                  Upload a single file, in a bulk, or an archive
                </p>
                <p className="info-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore m agna
                  aliqua.
                </p>
                <p className="info-subtitle">
                  Chose between different anonymization modes
                </p>
                <p className="info-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore m agna
                  aliqua.
                </p>
                <p className="info-subtitle">
                  Add watermarks in few easy steps
                </p>
                <p className="info-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore m agna
                  aliqua.
                </p>
              </div>
            </div>
            <div className="task-row">
              <div className="tasks-info">
                <h6 className="info-title">
                  Account information & Payment history
                </h6>
                <p className="info-subtitle">
                  Manage of all your tasks in one place
                </p>
                <p className="info-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore m agna
                  aliqua.
                </p>
                <p className="info-subtitle">
                  Preview anonimized files before downloading
                </p>
                <p className="info-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore m agna
                  aliqua.
                </p>
              </div>
              <div className="tasks-img">
                <img src={Account} alt="platform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
