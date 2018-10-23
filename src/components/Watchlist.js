import React from "react";
import Welcome from "./Welcome";
import Nav from "./Nav";
import Videos from './Videos';

import './Video.css';
import './Watchlist.css';

export default function SearchPage(props) {
  return (
    <div>
      <Nav />
      <section className="watchlist">
          <h2>My Watchlist</h2>
          <Videos />
      </section>
    </div>
  );
}

