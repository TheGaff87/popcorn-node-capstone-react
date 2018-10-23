import React from "react";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";

import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <section className="form-landing">
      <Benefits />
      <div className="form-container">
        <form className="signup">
          <fieldset>
            <div className="flex">
              <label htmlFor="name">First name</label>
              <input id="name" type="text" />
              <label htmlFor="">Last name</label>
              <input type="text" />
              <label htmlFor="">Username</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>
          </fieldset>
          <button>Submit</button>
        </form>
      <Link to="/login">Have an account? Login!</Link>
      </div>
      <Details />
    </section>
  );
}
