import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Forms/Forms";
import apiClient from "../../http/http-common";
import logo from "../../assets/logo.png";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitButton, setSubmitButton] = useState(false);

  const form = useRef();

  const validateLogin = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
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
    const validate = validateLogin();
    setSubmitButton(validate);
    if (validate) {
      setValidate({});
      setEmail("");
      setPassword("");
    }

    const userData = {
      username: email,
      password: password,
    };

    try {
      await apiClient
        .post("/user/verify-login", JSON.stringify(userData))
        .then((res) => {
          localStorage.setItem("user", res.data.token);
          alert("Wait");
          window.location.href = "/home";
        });
    } catch (err) {
      if (!err?.response) {
        alert("No Server Response");
      } else if (err.response?.status === 400) {
        alert("Missing Username or Password");
      } else if (err.response?.status === 401) {
        alert("Unauthorized");
      } else {
        alert("Login Failed");
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
      <div className="col-12  auth-main-col text-center">
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
            <p>Login to your account</p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={submitUser}
                autoComplete={"off"}
                ref={form}
              >
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
                  </div>

                  <div className="extra mt-3 row justify-content-between">
                    <div className="col-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember"
                          checked={remember}
                          onChange={(e) => setRemember(e.currentTarget.checked)}
                        />
                        <label className="form-check-label" htmlFor="remember">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="forgot-password text-end">
                        <Link to="/forgot-password">Forgot password?</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  {email === "" ||
                  email === null ||
                  password === "" ||
                  password === null ? (
                    <button
                      disabled={true}
                      type="submit"
                      className="btn btn-primary w-100 theme-btn mx-auto btn-submit"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary w-100 theme-btn mx-auto btn-submit"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>

              <hr />
              <div className="auth-option text-center pt-2">
                No Account?{" "}
                <Link className="text-link" to="/register">
                  Sign up{" "}
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

export default Login;
