import React, { Component } from "react";
import propTypes from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className="fab fa-github"></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }

  static propTypes = {
    title: propTypes.string.isRequired,
  };
}

export default Navbar;
