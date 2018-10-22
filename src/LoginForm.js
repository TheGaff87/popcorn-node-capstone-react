import React from "react";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";

import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div>
      <Benefits />
      <form className="login">
        <fieldset>
          <div className="flex">
            <legend>Login</legend>
            <label htmlFor="">
              Email
              <input type="email" />
            </label>
            <label htmlFor="">
              Password
              <input type="password" />
            </label>
          </div>
        </fieldset>
        <button>Submit</button>
      </form>
      <Details />
      <Link to="/signup">Don't have an account? Sign up!</Link>
      <Link to="/landing">Return to Landing Page</Link>
    </div>
  );
}
