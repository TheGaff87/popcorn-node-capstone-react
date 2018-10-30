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
          <Route exact path="/" render={() => <Welcome person={this.props.loggedIn} />}/>
          {/* // login user {user}*/}
          {/* // grab from db user name */}
          {/* then the name gets stored in a prop */}
          <header>
            <h1><Link to="/">Popcorn</Link></h1>
            <Route exact path="/" component={Nav} />
          </header>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
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
