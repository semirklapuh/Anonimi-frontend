import React from "react";
import RegBox from "./regbox";
import "./style.css";
import logo from "../../assets/logo.png";

const Register = () => {
  return (
    <div className="reg-page">
      <div className="registration">
        <div className="header">
          <div className="header-div">
            <img src={logo} alt="logo" />
            <p className="logo-text">ANONIMI</p>
          </div>
          <div className="header-div">
            <h2>Welcome!</h2>
            <p>Create new account</p>
          </div>
        </div>
        <div>
          <RegBox />
        </div>
      </div>
    </div>
  );
};

export default Register;
