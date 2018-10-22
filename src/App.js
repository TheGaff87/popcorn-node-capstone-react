import React, { Component } from "react";
import Landing from "./Landing";
import Login from "./LoginForm";
import Signup from "./SignupForm";
import SearchPage from "./SearchPage";
import Watchlist from "./Watchlist";
import Footer from "./Footer";
import Main from "./Main";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Popcorn</h1>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/watchlist" component={Watchlist} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
