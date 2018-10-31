import React from "react";

import { Link } from "react-router-dom";

import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
        <li>
          <Link className="account" to="/auth/login">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}
