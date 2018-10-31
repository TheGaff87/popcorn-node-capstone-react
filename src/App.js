import React, { Component } from "react";

import {connect} from 'react-redux';
import {logUser} from './actions';

import Landing from "./components/Landing";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import SearchPage from "./components/SearchPage";
import Watchlist from "./components/Watchlist";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <div className="container">
          <Route exact path="/user" render={() => <Welcome person={this.props.loggedIn} />}/>
          <header>
            <h1><Link to="/">Popcorn</Link></h1>
            {/* <Nav /> */}
            <Route exact path="/user" component={Nav} />
          </header>
          <Route exact path="/" component={Landing} />
          <Route exact path="/user" component={Main} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/watchlist" component={Watchlist} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(App);
