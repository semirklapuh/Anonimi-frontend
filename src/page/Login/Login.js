import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Forms/Forms";
import apiClient from "../../http/http-common";
import logo from "../../assets/logo.png";
import "./style.css";
import googleLoginIcon from "../../assets/icons8-google-48.png";
import facebookLoginIcon from "../../assets/icons8-facebook-48.png";
import appleLoginIcon from "../../assets/apple-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitButton, setSubmitButton] = useState(false);

  //dodao status za verified response, display error da prikaze error message ako nije loginan
  const [status, setStatus] = useState(false);
  const [displayError, setDisplayError] = useState(false);

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

    //Ispod izmjene
    try {
      await apiClient
        .post("/user/verify-login", JSON.stringify(userData))
        .then((res) => {
          //kupim verified response iz objekta
          setStatus(res.data.verified);
          localStorage.setItem("user", res.data.token);
        });

      //na osnovu statusa mjenjam error display
      if (status) {
        setDisplayError(false);
      } else {
        setDisplayError(true);
      }
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

  //ako je uspjesno logovan redirecta na home
  useEffect(() => {
    if (status) {
      setDisplayError(false);
      window.location.href = "/home";
    }
  }, [status]);

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className="g-0 auth-wrapper background__content">
      <div className="col-12  auth-main-col text-center height">
        <div className="d-flex flex-column align-content-end height pt">
          <div className="auth-body mx-auto height">
            <p className="login__hello">Hello!</p>
            <p className="prgf">Login to your account</p>
            <div className="auth-form-container text-start height">
              <form
                className="auth-form"
                method="POST"
                onSubmit={submitUser}
                autoComplete={"off"}
                ref={form}>
                <div className="email-login mb-3 em">
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
                </div>

                <div className="login__password mb-3">
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
                      onClick={(e) => togglePassword(e)}>
                      <i
                        className={
                          showPassword ? "far fa-eye" : "far fa-eye-slash"
                        }></i>{" "}
                    </button>
                  </div>
                  <div>
                    <p
                      style={{
                        display: displayError ? "block" : "none",
                        color: "red",
                      }}>
                      Wrong email or password
                    </p>
                  </div>

                  <div className="extra mt-3  row justify-content-between">
                    <div className=""></div>
                    <div className="">
                      <div className="login__forgot-password text-end fp">
                        <Link to="/forgot-password">Forgot your password?</Link>
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
                      className=" loginButton-d">
                      Log in
                    </button>
                  ) : (
                    <button type="submit" className=" loginButton">
                      Log in
                    </button>
                  )}
                </div>
              </form>

              <div className="login__OR">- OR -</div>

              <div className="login__signInWith">
                <button
                  type="submit"
                  className="login__signInWithButton"
                  disabled={false}>
                  <img
                    src={googleLoginIcon}
                    height="25px"
                    width="25px"
                    alt=""
                  />
                  <span className="">Continue with Google</span>
                </button>
                <button
                  type="submit"
                  className="login__signInWithButton"
                  disabled={false}>
                  <img
                    src={facebookLoginIcon}
                    height="25px"
                    width="25px"
                    alt=""
                  />
                  <span>Continue with Facebook</span>
                </button>
                <button
                  type="submit"
                  className="login__signInWithButton"
                  disabled={false}>
                  <img src={appleLoginIcon} height="25px" width="25px" alt="" />
                  <span>Continue with Apple</span>
                </button>
              </div>
              <div className="auth-option text-center pt-2 prgf">
                Don’t have an account?{" "}
                <Link className="text-link" to="/register">
                  Sign up{" "}
                </Link>
              </div>

              <p className="contactDiv">contact@anonimi.ai</p>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
