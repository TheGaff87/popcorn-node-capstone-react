import React from "react";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";

import { Link } from "react-router-dom";

import "./Login.css";

export default function LoginForm() {
  return (
    <div className="login-landing">
      <Benefits />
      <div className="form-container">
        <form className="login">
          <fieldset>
            <legend>Login</legend>
            <div className="flex">
              <label htmlFor="">
                Email
              </label>
                <input type="email" />
              <label htmlFor="">
                Password
              </label>
                <input type="password" />
            </div>
          </fieldset>
          <button>Submit</button>
        </form>
        <Link to="/signup">Don't have an account? Sign up! </Link>
        <Link to="/landing">Return to Landing Page</Link>
      </div>
      <Details />
    </div>
  );
}
