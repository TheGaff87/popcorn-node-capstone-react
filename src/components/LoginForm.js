import React from "react";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";

import { Link } from "react-router-dom";

import "./Forms.css";

export default function LoginForm() {
  return (
    <section className="form-landing">
      <Benefits />
      <div className="form-container">
        <form className="login">
          <fieldset>
            <div className="flex">
              <label htmlFor="email">Email</label>
              <input type="email" />
              <label htmlFor="password">Password</label>
              <input type="password" />
            </div>
          </fieldset>
          <button>Submit</button>
        </form>
        <Link to="/signup">Don't have an account? Sign up! </Link>
        <Link to="/landing">Return to Landing Page</Link>
      </div>
      <Details />
    </section>
  );
}