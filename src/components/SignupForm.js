import React from "react";
import Benefits from "./InfoBene";
import Details from "./InfoDetail";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signupUser } from "../actions";

export class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const inputs = [this.username, this.email, this.password];
    const user = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
    };
    this.props.dispatch(signupUser(user));
    console.log(this.props);
    inputs.map(input => input.value = '');
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard/user" />;
    }
    return (
      <section className="form-landing">
        <Benefits />
        <div className="form-container">
          <form className="signup" onSubmit={this.onSubmit}>
            <fieldset>
              <div className="flex">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" ref={input => this.username = input}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={input => this.email = input}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref={input => this.password = input}/>
              </div>
            </fieldset>
            <button>Signup</button>
          </form>
          <nav>
          <Link to="/auth/login">Have an account? <span>Login!</span></Link>
          </nav>
        </div>
        <Details />
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  videos: state.videos,
  loggedIn: state.user,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(SignupForm);