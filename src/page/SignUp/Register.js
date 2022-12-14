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
  const form = useRef();

  const validateRegister = () => {
    let isValid = true;

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
        minLength: 8,
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
      setSubmitButton(false);
    }
    setSubmitButton(true);
    return isValid;
  };

  const submitUser = async (e) => {
    e.preventDefault();
    const validate = validateRegister();

    if (validate) {
      setValidate({});
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert(
        "Successfully Register User, Please check your email for confirmation."
      );
    }

    const userData = {
      firstName: firstName,
      lastName: lastName,
      username: email,
      password: password,
      confirmationPassword: confirmPassword,
      signinTypeId: 3,
    };
    console.log(userData);

    await apiClient
      .post("/user/signin", JSON.stringify(userData))
      .then((res) => {
        console.log(res.data);
      });
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

                <div className="password mb-3">
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

                    <div
                      className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.password
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      {validate.validate && validate.validate.password
                        ? validate.validate.password[0]
                        : ""}
                    </div>
                  </div>

                  <div className="password mb-3 mt-3">
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

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.password
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.password
                          ? validate.validate.password[0]
                          : ""}
                      </div>
                    </div>
                  </div>
                  {password !== confirmPassword ? (
                    <label className="red-label">Passwords don´t match.</label>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-center">
                  {submitButton && password === confirmPassword ? (
                    <button
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
