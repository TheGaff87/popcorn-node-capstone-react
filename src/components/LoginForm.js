import React from "react";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";
import Spinner from "react-spinkit";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";

import "./Forms.css";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const inputs = [this.email, this.password];
    const user = {
      email: this.email.value,
      password: this.password.value,
    };
    this.props.dispatch(login(user));
    inputs.map(input => input.value = '');
  }

  render() {
    
    if (this.props.loading) {
      return (
        <Spinner className="spinner'" name="three-bounce" color="fuchsia" />
      );
    }

    if (this.props.loggedIn) {
      return <Redirect to="/dashboard/user" />;
    }


    return (
      <section className="form-landing">
        <Benefits />
        <div className="form-container">
          <span className="error">{this.props.error}</span>
          <form className="login" onSubmit={this.onSubmit}>
            <fieldset>
              <div className="flex">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={input => this.email = input} required autoFocus/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref={input => this.password = input} required/>
              </div>
            </fieldset>
            <button>Submit</button>
          </form>
          <nav>
            <Link to="/auth/signup">Don't have an account? <span>Sign up!</span> </Link>
          </nav>
        </div>
        <Details />
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  loggedIn: state.user,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(LoginForm);