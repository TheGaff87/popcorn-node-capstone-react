import React from "react";
import { Link } from "react-router-dom";

export default function Welcome(props) {
  return (
    <p className="welcome">
      Welcome, {props.person}!
      <Link className="account" to="/login">Logout</Link>
    </p>
  );
}
