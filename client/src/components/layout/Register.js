import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
import logo from "../../assets/home-logo.png";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(newUser);
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
                <Link to="/">sign in</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="landing-con">
          <img id="landing-logo" src={logo} alt="" />
        </div>
        <div className="form-wrapper">
          <ul className="form-title">
            <li id="register-signin">
              <Link className="red-on-white" to="/">
                Sign In
              </Link>
            </li>
            <li id="register-register">
              <Link className="white-on-red" to="/register">
                Register
              </Link>
            </li>
          </ul>
          <div id="reg-box">
            <form id="register-form" onSubmit={this.onSubmit}>
              <label htmlFor="name">Full Name</label>
              <br />
              <input
                type="text"
                name="name"
                className="reg"
                value={this.state.name}
                onChange={this.onChange}
              />

              <label htmlFor="email" id="reg-email">
                Email
              </label>

              <input
                type="text"
                name="email"
                className="reg"
                id="email-input"
                value={this.state.email}
                onChange={this.onChange}
              />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                className="reg"
                value={this.state.password}
                onChange={this.onChange}
              />
              <br />
              <label htmlFor="password2" id="reg-conPas">
                Confirm Password
              </label>
              <input
                type="password"
                name="password2"
                className="reg secondPassword"
                value={this.state.password2}
                onChange={this.onChange}
              />
              <input type="submit" value="Submit" id="reg-submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
