import React, { Component } from "react";
//import logo from "../../Images/color-hunt-palette.png";
import Header from "../../Component/Header/Header";
import "./Create.scss";
import "./../../Component/Header/Header.scss";

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
          <h1
            //{colorChange ? "black":"red"}
            className={this.state.colorChange ? "black title" : "red title"}
          >
            Create a Color Palette!
          </h1>
          <div className="box">
            <input type="color" className="holder box_1" />
            <input type="color" className="holder box_2" />
            <input type="color" className="holder box_3" />
            <input type="color" className="holder box_4" />
          </div>
          <button className="buttonup" onClick={this.handleClick}>
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default Create;
