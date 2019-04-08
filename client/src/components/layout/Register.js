import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

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
                className={classnames("reg", { invalid: errors.name })}
                value={this.state.name}
                onChange={this.onChange}
              />
              {errors.name && <div className="invalid-msg">{errors.name}</div>}

              <label htmlFor="email" id="reg-email">
                Email
              </label>

              <input
                type="text"
                name="email"
                className={classnames("reg", { invalid: errors.email })}
                id="email-input"
                value={this.state.email}
                onChange={this.onChange}
              />
              {errors.email && (
                <div className="invalid-msg right">{errors.email}</div>
              )}
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                className={classnames("reg", { invalid: errors.password })}
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && (
                <div className="invalid-msg">{errors.password}</div>
              )}
              <br />
              <label htmlFor="password2" id="reg-conPas">
                Confirm Password
              </label>
              <input
                type="password"
                name="password2"
                className={classnames("reg secondPassword", {
                  invalid: errors.password2
                })}
                value={this.state.password2}
                onChange={this.onChange}
              />
              {errors.password2 && (
                <div className="invalid-msg right">{errors.password2}</div>
              )}
              <input type="submit" value="Submit" id="reg-submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
