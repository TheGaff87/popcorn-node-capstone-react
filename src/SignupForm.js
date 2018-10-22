import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";

export default function SignupForm() {
  return (
    <div>
      <Header />
      <Benefits />
      <form class="signup">
        <fieldset>
          <div class="flex">
            <legend>Signup</legend>
            <label for="">
              First name
              <input type="text" />
            </label>
            <label for="">
              Last name
              <input type="text" />
            </label>
            <label for="">
              Username
              <input type="text" />
            </label>
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
