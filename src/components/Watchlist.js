import React from "react";
import Nav from "./Nav";
import Videos from './Videos';

import { Redirect } from "react-router-dom";

export default function Watchlist (props) {
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  }

  if (props.error) {
    return <div className='unauthorized'>{props.error}</div>
  }

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

