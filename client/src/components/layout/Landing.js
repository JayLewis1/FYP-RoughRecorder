import React, { Component } from "react";

import logo from "../../assets/home-logo.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/">library</a>
              </li>
              <li>
                <a href="/">about</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="landing-con">
          <img id="landing-logo" src={logo} />
        </div>
        <div className="form-wrapper">
          <ul className="form-title">
            <li id="sign-in">
              <button id="sign-btn" onclick="signClick()">
                Sign In
              </button>
            </li>
            <li id="register">
              <button id="reg-btn" onclick="regClick()">
                Register
              </button>
            </li>
          </ul>
          <div id="signin-box">
            <form id="sigin-form">
              <label for="email">Email</label>
              <br />
              <input type="text" name="email" />
              <br />
              <label for="password">Password</label>
              <br />
              <input type="password" name="password" />
              <input
                type="submit"
                value="Submit"
                id="sign-submit"
                onClick="pageChange()"
              />
            </form>
            <form id="register-form">
              <label for="name">Full Name</label>
              <br />
              <input type="text" name="name" className="reg" />

              <label for="email" id="reg-email">
                Email
              </label>

              <input type="text" name="email" className="reg" />
              <br />
              <label for="password">Password</label>
              <br />
              <input type="password" name="password" className="reg" />
              <br />
              <label for="secondPassword" id="reg-conPas">
                Confirm Password
              </label>
              <input
                type="password"
                name="secondPassword"
                className="reg secondPassword"
              />
              <input type="submit" value="Submit" id="reg-submit" />
            </form>
          </div>
        </div>
        <helmet>
          <script type="text/javascript" src="/client/src/js/script.js" />
        </helmet>
      </div>
    );
  }
}

export default Landing;
