import React from "react";
import { Link } from "react-router-dom";
import ForgotImg from "../../assets/img/vector/forgot-password.png";

const ForgotPassword = () => {
  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo forgot-img">
          <img src={ForgotImg} alt="" className="auth-header-logo-img" />
        </div>
      </div>
      <div className="auth-body">
        <h1 className="auth-header-title">Forgot Password?</h1>
        <p className="auth-header-subtitle forgot-subtitle">
          Enter your email and we'll send you intructions to reset your password
        </p>
        <form className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Email address
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="example@gmail.com"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Send Link Notification
          </button>
          <Link to={"/auth/signin"} className="btn-back-to-login">
            Back to login
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
