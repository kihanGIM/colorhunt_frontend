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
            className={`title ${this.state.colorChange ? "black" : "red"}`}
          >
            Create a Color Palette!
          </h1>
          <div className="box">
            <input type="color" className="holder box_1" value="#aaaaaa" />
            <input type="color" className="holder box_2" value="#bbbbbb" />
            <input type="color" className="holder box_3" value="#cccccc" />
            <input type="color" className="holder box_4" value="#dddddd" />
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
