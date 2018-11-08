import React from "react";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";

import { Link } from "react-router-dom";
import './Landing.css';

export default function Landing() {
  return (
    <section className="landing">
      <Benefits />
      <div role="region" aria-labelledby="introduction" className="landing-container">
        <h2 id="introduction">Welcome to Popcorn!</h2>
        <aside>Popcorn is an entertainment app that allows users to chat with each other and watch YouTube videos together! <p>Visit the demo and login as demo@app.com | password1</p></aside>
        <nav>
          <Link to="/auth/login"><span>Demo</span></Link>
        </nav>
      </div>
      <Details />
    </section>
  );
}
