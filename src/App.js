import React, { Component } from "react";

import {connect} from 'react-redux';

import Landing from "./components/Landing";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import SearchPage from "./components/SearchPage";
import Watchlist from "./components/Watchlist";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import Nav from "./components/Nav";
import Chatbox from "./components/Chatbox";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/dashboard/user" render={() => <Welcome person={this.props.loggedIn} />}/>
          <header>
            <h1><Link to="/">Popcorn</Link></h1>
            {/* <Nav /> */}
            <Route exact path="/dashboard/user" component={Nav} />
          </header>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard/user" component={Main} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/dashboard/search" component={SearchPage} />
          <Route exact path="/dashboard/watchlist" render={() => <Watchlist error={this.props.error} loggedIn={this.props.loggedIn} />} />
          <Route path="/dashboard" render={() => <Chatbox error={this.props.error} />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export const mapStateToProps = state => ({
  loggedIn: state.user,
  error: state.error
});

export default connect(mapStateToProps)(App);
