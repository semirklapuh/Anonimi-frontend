import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import logoFooter from "./logoFooter.png";

export const Footer = () => {
  return (
    <div cid="footer">
      <div className="footer-top">
        <p className="footer-top-p">Ready to get started?</p>
        <Button>Try for free</Button>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-column">
          <img src={logoFooter} alt="logo" />
          <p className="footer-bottom-logo-text ">ANONIMI</p>
        </div>
        <div className="footer-bottom-column">
          <p className="footer-bottom-subtitle">Ready to get started?</p>
          <p className="footer-bottom-text ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="footer-bottom-column">
          <p className="footer-text">Product</p>
          <p className="footer-bottom-text ">
            Showcase<br></br>
            Demo<br></br>
            Features<br></br>
            Industries<br></br>
            Pricing<br></br>
            API Access<br></br>
          </p>
        </div>
        <div className="footer-bottom-column">
          <p className="footer-text">Company</p>
          <p className="footer-bottom-text ">
            Our vision<br></br>
            About<br></br>
            Contact Us<br></br>
          </p>
        </div>
      </div>
    </div>
  );
};
