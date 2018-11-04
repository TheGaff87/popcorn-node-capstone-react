import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, getWatchlist} from "../actions";

import "./Nav.css";

export class Nav extends React.Component {

  logOut() {
    this.props.dispatch(logout());
  }

  getWatchList() {
    this.props.dispatch(getWatchlist(this.props.userID, this.props.authToken));
  }

  render() {
    return (
      <nav className="main-nav">
        <ul className="nav-items">
          <li>
            <Link to="/dashboard/user">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/search">Search</Link>
          </li>
          <li>
            <Link to="/dashboard/watchlist" onClick={() => this.getWatchList()}>Watchlist</Link>
          </li>
          <li>
            <Link className="account" to="/auth/login" onClick={() => this.logOut()}>Logout</Link>
          </li>
        </ul>
      </nav>
    );
  };
}

export const mapStateToProps = state => ({
  authToken: state.authToken,
  userID: state.userID
});

export default connect(mapStateToProps)(Nav);