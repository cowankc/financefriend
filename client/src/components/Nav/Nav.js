import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {

  state = {
    user: ""
  };

  loginLink = () => {
    if (this.state.user !== undefined) {
    return (
    <li className="pure-menu-item">
      <a href="/" 
      className="pure-menu-link nav-item"
      onClick={this.logout}
      >
        Logout
      </a>
    </li>
    )}
    else {
      return(
    <li className="pure-menu-item"><a href="/login" className="pure-menu-link nav-item">Login</a></li>
      )}
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="pure-menu pure-menu-horizontal navbar">
          <a href="/" className="pure-menu-heading pure-menu-link nav-home">Finance Friend</a>
          <ul className="pure-menu-list">
          <li className="pure-menu-item nav-item">{this.state.user}</li>
            <li className="pure-menu-item"><a href="/home" className="pure-menu-link nav-item">Home</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;