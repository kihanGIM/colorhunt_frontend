import React, { Component } from "react";
//import logo from "../../Images/color-hunt-palette.png";
import Header from "../../Component/Header/Header";
import "./Create.scss";
import "./../../Component/Header/Header.scss";
import Main from "./../Main/Main";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "",
      colorChange: true
    };
  }

  handleClick = e => {
    this.setState({
      colorChange: !this.state.colorChange
    });
  };

  render() {
    return (
      <div className="create">
        <Header />
        <div className="center">
          <h1 className={`title ${this.state.colorChange ? "black" : "red"}`}>
            Create a Color Palette!
          </h1>
          <div className="box">
            <input type="color" className="first" value="#aaaaaa" />
            <input type="color" className="second" value="#bbbbbb" />
            <input type="color" className="third" value="#cccccc" />
            <input type="color" className="fourth" value="#009900" />
          </div>
          <button className="buttonup" onClick={this.handleClick}>
            Done
          </button>
        </div>
        <Main />
      </div>
    );
  }
}

export default Create;
