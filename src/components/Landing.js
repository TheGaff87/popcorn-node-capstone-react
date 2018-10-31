import React from "react";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";

import { Link } from "react-router-dom";
import './Landing.css';

export default function Landing() {
  return (
    <section className="landing">
      <Benefits />
      <div className="landing-container">
        <h2>Welcome to Popcorn!</h2>
        <p>Popcorn is an entertainment app that allows users to chat with each other and watch YouTube videos together!</p>
        <nav>
          <Link to="/login">Demo</Link>
        </nav>
      </div>
      <Details />
    </section>
  );
}
