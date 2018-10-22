import React from "react";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";

import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <div>
      <Benefits />
      <form className="signup">
        <fieldset>
          <div className="flex">
            <legend>Signup</legend>
            <label htmlFor="">
              First name
              <input type="text" />
            </label>
            <label htmlFor="">
              Last name
              <input type="text" />
            </label>
            <label htmlFor="">
              Username
              <input type="text" />
            </label>
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
      <Link to="/login">Have an account? Login!</Link>
    </div>
  );
}
