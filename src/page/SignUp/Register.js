import { useState } from "react";
import { async } from "react-advanced-form";
import { Link } from "react-router-dom";
import Form from "../../components/Forms/Forms";
import "./style.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const axios = require("axios");

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };
  const handleLastNameChange = (value) => {
    setLastName(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleConfirmationPasswordChange = (value) => {
    setConfirmPassword(value);
  };
  const handleSave = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      username: email,
      password: password,
      confirmationPassword: confirmPassword,
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
    <div className="row g-0 auth-wrapper">
      <div className="col-12   auth-main-col text-center">
        <div className="d-flex flex-column align-content-end">
          <div className="auth-body mx-auto">
            <p>Create your Account</p>
            <div className="auth-form-container text-start">
              <form className="auth-form">
                <div className="name mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    placeholder="First name"
                    onChange={(e) => handleFirstNameChange(e.target.value)}
                  />
                </div>
                <div className="name mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    placeholder="Last name"
                    onChange={(e) => handleLastNameChange(e.target.value)}
                  />
                </div>

                <div className="email mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => handleEmailChange(e.target.value)}
                  />
                </div>

                <div className="password mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      name="password"
                      id="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => handlePasswordChange(e.target.value)}
                    />

                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onClick={(e) => togglePassword(e)}
                    >
                      <i
                        className={
                          showPassword ? "far fa-eye" : "far fa-eye-slash"
                        }
                      ></i>{" "}
                    </button>
                  </div>

                  <div className="password mb-3 mt-3">
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        name="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm password"
                        onChange={(e) =>
                          handleConfirmationPasswordChange(e.target.value)
                        }
                      />

                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={(e) => togglePassword(e)}
                      >
                        <i
                          className={
                            showPassword ? "far fa-eye" : "far fa-eye-slash"
                          }
                        ></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <hr />
              <div className="auth-option text-center pt-2">
                Have an account?{" "}
                <Link className="text-link" to="/login">
                  Sign in
                </Link>
              </div>
              <br />
              <div className="text-center">
                <button
                  onClick={() => handleSave()}
                  type="submit"
                  className="btn btn-secondary w-100 theme-btn mx-auto"
                >
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
