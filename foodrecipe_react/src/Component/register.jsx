import React from "react";
import style from "../assets/style.module.css";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className={style.body}>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-6 ${style.bgImage}`}>
            <img src={require("../assets/image/icon.png")} alt="img icon" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <form className="row g-3 m-5">
              <h3 className="text-center">Let's Get Started</h3>
              <p className="text-center text-muted">
                Create new account to access all features
              </p>
              <div>
                <label for="inputUsername" className="form-label">
                  Username
                </label>
                <input
                  className="form-control"
                  id="inputUsername"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label for="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label for="inputPhone" className="form-label">
                  Phone Number
                </label>
                <input
                  className="form-control"
                  id="inputPhone"
                  placeholder="08xxxxxxxxx"
                />
              </div>
              <div>
                <label for="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Create New Password"
                />
              </div>
              <div>
                <label for="inputPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="New Password"
                />
              </div>
              <div className="form-check">
                <input
                  id="gridCheck"
                  type="checkbox"
                  className={style.accent}
                />
                <label className="form-check-label" for="gridCheck">
                  I agree of term conditions
                </label>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className={`btn ${style.btnCustom}`}>
                  <Link className={style.a} to="/login">Register Accout</Link>
                </button>
              </div>
              <div className="text-center">
                <p className="text-muted">
                  Already have an account?
                  <Link className={style.ap} to="/login">Log in Here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default register;
