import React from "react";

export default function Welcome(props) {
  return (
    <p className="welcome">
      Welcome, {props.person}!
      <a className="account" href="/login-registration.html">Logout | Login</a>
    </p>
  );
}
