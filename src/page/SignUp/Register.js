import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Forms/Forms";
import apiClient from "../../http/http-common";
import logo from "../../assets/logo.png";

import "./style.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitButton, setSubmitButton] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const form = useRef();
  let isValid = true;

  const validateRegister = () => {
    let validator = Form.validator({
      firstName: {
        value: firstName,
        isRequired: true,
      },
      lastName: {
        value: lastName,
        isRequired: true,
      },
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
        isPassword: true,
      },
      confirmPassword: {
        value: confirmPassword,
        isRequired: true,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }

    return isValid;
  };

  const submitUser = async (e) => {
    e.preventDefault();
    const validate = validateRegister();

    if (validate) {
      setValidate({});
    }

    const userData = {
      firstName: firstName,
      lastName: lastName,
      username: email,
      password: password,
      confirmationPassword: confirmPassword,
      signinTypeId: 3,
    };
    //console.log(userData);

    try {
      await apiClient
        .post("/user/signin", JSON.stringify(userData))
        .then((res) => {
          console.log(res.data);
          alert(
            "Please check your email for confirmation and login to ANONIMI."
          );
          window.location.href = "/login";
        });
    } catch (err) {
      if (!err?.response) {
        alert("No Server Response");
      } else if (err.response?.status === 400) {
        alert("Registration Failed");
      }
    }
  };

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className="background__content">
      <div className=" g-0 auth-wrapper">
        <div className="pt-5 col-12   auth-main-col text-center height">
          <div className="pt-5 d-flex flex-column align-content-end height ">
            <div className="auth-body mx-auto height register__fix">
              <p className="register__welcome_title">Welcome!</p>
              <p className="prgf">Create your Account</p>
              <div className="auth-form-container text-start height">
                <form
                  className="auth-form"
                  method="POST"
                  onSubmit={submitUser}
                  autoComplete={"off"}
                  ref={form}>
                  <div className="name  group divLabel">
                    <label className="ms-2 mb-1" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        validate.validate && validate.validate.name
                          ? "is-invalid "
                          : ""
                      }`}
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      placeholder="Your first name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="name  group divLabel">
                    <label className="ms-2 mb-1" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        validate.validate && validate.validate.name
                          ? "is-invalid "
                          : ""
                      }`}
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      placeholder="Your last name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <div className="email  email-input group divLabel">
                    <label className="ms-2 mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        validate.validate && validate.validate.email
                          ? "is-invalid "
                          : ""
                      }`}
                      id="email"
                      name="email"
                      value={email}
                      placeholder="Your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="password mb-3 divLabel">
                    <div className="password divLabel">
                      <label className="ms-2 mb-1" htmlFor="Password">
                        Password
                      </label>
                      <div className="input-group mb-1">
                        <input
                          type={showPassword ? "text" : "password"}
                          className={`form-control ${
                            validate.validate && validate.validate.password
                              ? "is-invalid "
                              : ""
                          }`}
                          name="password"
                          id="password"
                          value={password}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm btn-icon"
                          onClick={(e) => togglePassword(e)}>
                          <i
                            className={
                              showPassword ? "far fa-eye" : "far fa-eye-slash"
                            }></i>{" "}
                        </button>
                      </div>
                    </div>

                    <div className="password mt-1 divLabel">
                      <label className="ms-2 mb-1" htmlFor="confirm Password">
                        Password confirm
                      </label>
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          className={`form-control ${
                            validate.validate && validate.validate.password
                              ? "is-invalid "
                              : ""
                          }`}
                          name="password"
                          id="confirmPassword"
                          value={confirmPassword}
                          placeholder="Confirm password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm btn-icon"
                          onClick={(e) => togglePassword(e)}>
                          <i
                            className={
                              showPassword ? "far fa-eye" : "far fa-eye-slash"
                            }></i>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  {password === null || password === "" ? (
                    ""
                  ) : (
                    <>
                      {password === confirmPassword ? (
                        <>
                          {(!password.match(/[A-Z]/) ||
                            !password.match(/[0-9]/) ||
                            !password.match(/[a-z]/) ||
                            password.length < 6) && (
                            <label className="red-label">
                              The password must have at least 1 uppercase
                              letter, <br></br> 1 lowercase letter, 1 number and
                              minimum 6 characters.
                            </label>
                          )}
                        </>
                      ) : (
                        <label className="red-label">
                          Passwords don´t match.
                        </label>
                      )}
                    </>
                  )}

                  <div className="text-center">
                    {password !== confirmPassword ||
                    password.length < 6 ||
                    !password.match(/[A-Z]/) ||
                    !password.match(/[0-9]/) ||
                    !password.match(/[a-z]/) ||
                    email === "" ||
                    email === null ||
                    firstName === "" ||
                    firstName === null ||
                    lastName === "" ||
                    lastName === null ? (
                      <button
                        disabled={true}
                        type="submit"
                        className="btn btn-primary w-100 theme-btn mx-auto btn-submit btn-common-type register__submitButton-d">
                        Create account
                      </button>
                    ) : (
                      <button className="btn btn-primary w-100 theme-btn mx-auto btn-submit btn-common-type register__submitButton">
                        Create account
                      </button>
                    )}
                  </div>
                </form>
                <p className="contactDiv__register">contact@anonimi.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
