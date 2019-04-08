import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";c
import logo from "../../assets/home-logo.png";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value }); // When user types it sets the value of the input into the state name, email, etc
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/register">sign up</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="landing-con">
          <img id="landing-logo" src={logo} alt="" />
        </div>
        <div className="form-wrapper">
          <ul className="form-title">
            <li id="landing-signin">
              <Link className="white-on-red" to="/">
                Sign In
              </Link>
            </li>
            <li id="landing-register">
              <Link className="red-on-white" to="/register">
                Register
              </Link>
            </li>
          </ul>
          <div id="signin-box">
            <form id="sigin-form" onSubmit={this.onSubmit}>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <input type="submit" value="Submit" id="sign-submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
