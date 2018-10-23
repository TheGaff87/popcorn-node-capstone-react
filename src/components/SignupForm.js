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
        <nav>
          <Link to="/login">Have an account? <span>Login!</span></Link>
        </nav>
      </div>
      <Details />
    </section>
  );
}
