import React, { Component } from "react";
import logo from "../../Images/color-hunt-palettes-logo.png";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dot: false,
      email: "",
      pw: "",
      new: false
    };
  }

  dothandleClick = () => {
    this.setState({
      dot: !this.state.dot
    });
    console.log(this.state.dot);
  };

  NewhandleClick = () => {
    this.setState({
      new: !this.state.new
    });
  };
  pagemove_signin = () => {
    this.props.history.push("/signin");
  };

  pagemove_main = () => {
    this.props.history.push("/");
  };

  pagemove_create = () => {
    this.props.history.push("/create");
  };

  render() {
    return (
      <div className="header">
        <div className="header_left">
          <div className="hat" onClick={this.pagemove_signin}>
            <img className="hat" src={logo} alt="logo" />
          </div>

          <div className="logo" onClick={this.pagemove_main}>
            Color Hunt
          </div>
          <div className="createtext" onClick={this.pagemove_create}>
            create
          </div>
          <div className="new" onClick={this.NewhandleClick}>
            New
            <div className={this.state.new ? "new_on" : "new_off"}>
              <a href="https://colorhunt.co/palettes" className="New">
                New
              </a>
              <a href="https://colorhunt.co/palettes/trendy" className="Trendy">
                Trendy
              </a>
              <a
                href="https://colorhunt.co/palettes/popular"
                className="Popular"
              >
                Popular
              </a>
              <a href="https://colorhunt.co/palettes/random" className="Random">
                Random
              </a>
            </div>
          </div>
        </div>
        <div className="dot" onClick={this.dothandleClick}>
          …
          <div className={this.state.dot ? "dot_on" : "dot_off"}>
            <a href="https://colorhunt.co/palettes" className="palettes">
              Palettes
            </a>
            <div className="create" onClick={this.pagemove_create}>
              create
            </div>
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
            <div className="sign_in" onClick={this.pagemove_signin}>
              Sign in
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
