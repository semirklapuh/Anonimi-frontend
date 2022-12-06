import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./style.css";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };
  const handleLastNameChange = (value) => {
    setLastName(value);
  };
  const handleUsernameChange = (value) => {
    setUsername(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleConfirmationPasswordChange = (value) => {
    setConfirmationPassword(value);
  };
  const handleSave = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      confirmationPassword: confirmationPassword,
      signinType: 3,
    };
    const url =
      "http://ec2-34-254-191-235.eu-west-1.compute.amazonaws.com:8000/api/v1/user/signin";
    axios
      .post(url, {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: data,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="auth-body">
        <h2>Registration</h2>
        <input
          type="name"
          id="firstName"
          className="form-control"
          placeholder="Enter first name"
          onChange={(e) => handleFirstNameChange(e.target.value)}
        />
        <input
          type="name"
          id="lastName"
          className="form-control"
          placeholder="Enter last name"
          onChange={(e) => handleLastNameChange(e.target.value)}
        />
        <input
          type="email"
          id="username"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => handleUsernameChange(e.target.value)}
        />
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <input
          type="password"
          id="confirmationPassword"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => handleConfirmationPasswordChange(e.target.value)}
        />
        <Button className="primary" onClick={() => handleSave()}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default Registration;
