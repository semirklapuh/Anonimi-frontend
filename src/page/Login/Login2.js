import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (value) => {
    setUsername(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSave = () => {
    const data = {
      username: username,
      password: password,

      signinType: 3,
    };
    const url =
      "http://ec2-34-254-191-235.eu-west-1.compute.amazonaws.com:8000//api/v1/user/verify-login";
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
        <h2>Login</h2>
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

        <Button onClick={() => handleSave()}>Register</Button>
      </div>
    </div>
  );
};

export default Login;
