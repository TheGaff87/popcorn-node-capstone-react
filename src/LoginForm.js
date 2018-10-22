import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";

export default function LoginForm() {
  return (
    <div>
      <Header />
      <Benefits />
      <form class="login">
        <fieldset>
          <div class="flex">
            <legend>Login</legend>
            <label for="">
              Email
              <input type="email" />
            </label>
            <label for="">
              Password
              <input type="password" />
            </label>
          </div>
        </fieldset>
        <button>Submit</button>
      </form>
      <Details />
      <Footer />
    </div>
  );
}
