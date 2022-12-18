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
    <div className="row g-0 auth-wrapper">
      <div className="col-12   auth-main-col text-center">
        <div className="d-flex flex-column align-content-end">
          <div className="auth-body mx-auto">
            <div>
              <div className="form-header-div">
                <img src={logo} alt="logo" />
              </div>
              <div className="form-header-div">
                <h5>ANONIMI</h5>
              </div>
            </div>
            <p>Create your Account</p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={submitUser}
                autoComplete={"off"}
                ref={form}
              >
                <div className="name mb-3">
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
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.firstName
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.firstName
                      ? validate.validate.firstName[0]
                      : ""}
                  </div>
                </div>
                <div className="name mb-3">
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
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.lastName
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.lastName
                      ? validate.validate.lastName[0]
                      : ""}
                  </div>
                </div>

                <div className="email mb-3">
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
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.email
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.email
                      ? validate.validate.email[0]
                      : ""}
                  </div>
                </div>

                <div className="password mb-2">
                  <div className="input-group">
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
                      onClick={(e) => togglePassword(e)}
                    >
                      <i
                        className={
                          showPassword ? "far fa-eye" : "far fa-eye-slash"
                        }
                      ></i>{" "}
                    </button>

                    <label
                      className={`red-label ${
                        validate.validate && validate.validate.password
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      {validate.validate && validate.validate.password
                        ? validate.validate.password[0]
                        : ""}
                    </label>
                  </div>

                  <div className="password">
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
                        onClick={(e) => togglePassword(e)}
                      >
                        <i
                          className={
                            showPassword ? "far fa-eye" : "far fa-eye-slash"
                          }
                        ></i>{" "}
                      </button>
                    </div>

                    <label
                      className={`red-label  ${
                        validate.validate && validate.validate.password
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      {validate.validate && validate.validate.password
                        ? validate.validate.password[0]
                        : ""}
                    </label>
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
                            The password must have at least 1 uppercase letter,{" "}
                            <br></br> 1 lowercase letter, 1 number and 6
                            characters.
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
                      className="btn btn-primary w-100 theme-btn mx-auto btn-submit"
                    >
                      Submit
                    </button>
                  ) : (
                    <button className="btn btn-primary w-100 theme-btn mx-auto btn-submit">
                      Submit
                    </button>
                  )}
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
