import React from "react";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";

import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <Benefits />
      <div>
        <h2>My landing page content</h2>
        <p>Welcome to Popcorn!</p>
        <Link to="/login">Demo</Link>
      </div>
      <Details />
    </div>
  );
}
