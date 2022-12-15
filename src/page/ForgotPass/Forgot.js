import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Forms/Forms";
import apiClient from "../../http/http-common";
import "./style.css";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});
  const form = useRef();

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
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

  const forgotPass = async (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      alert("Reset password link is sent to " + email);
      setValidate({});
      setEmail("");
    }
    const userData = {
      mailTo: email,
      link: "https://meshmind.io/",
    };

    await apiClient
      .post("/user/send-mail-reset-password", JSON.stringify(userData))
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="row g-0 auth-wrapper">
      <div className="col-12 auth-main-col text-center">
        <div className="d-flex flex-column align-content-end">
          <div className="auth-body mx-auto">
            <p>Forgot Password</p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={forgotPass}
                autoComplete={"off"}
                ref={form}
              >
                <div className="email mb-3">
                  <input
                    type="email"
                    className={`form-control email ${
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

                <div className="text-center">
                  {email === "" || email === null ? (
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
                <Link className="text-link" to="/login">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
