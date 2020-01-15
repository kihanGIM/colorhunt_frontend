import React, { Component } from "react";
import logo from "../../Images/color-hunt-palettes-logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dot: false
    };
  }

  dothandleClick = () => {
    this.setState({
      dot: !this.state.dot
    });
    console.log(this.state.dot);
  };

  render() {
    return (
      <div className="header">
        <div className="header_left">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <a href="https://colorhunt.co/" className="logo">
              Color Hunt
              <img className="hat" src={logo} alt="logo" />
            </a>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/create">
            <a href="https://colorhunt.co/create" className="createtext">
              Create
            </a>
          </Link>
        </div>
        <div className="dot" onClick={this.dothandleClick}>
          …
          <div className={this.state.dot ? "dot_on" : "dot_off"}>
            <a href="https://colorhunt.co/palettes" className="palettes">
              Palettes
            </a>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/create"
            >
              <a href="https://colorhunt.co/create" className="create">
                Create
              </a>
            </Link>
            <a href="https://colorhunt.co/likes" className="Likes">
              Likes
            </a>
            <a href="https://colorhunt.co/about" className="About">
              About
            </a>
            <a
              href="https://www.instagram.com/color.hunt/"
              className="Instargram"
            >
              Instargram
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
