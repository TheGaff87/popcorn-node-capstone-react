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
        <aside role="complementary">Popcorn is an entertainment app that allows users to chat with each other and watch YouTube videos together!</aside>
        <nav>
          <Link to="/auth/login"><span>Demo</span></Link>
        </nav>
      </div>
      <Details />
    </section>
  );
}
