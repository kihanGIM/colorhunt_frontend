import React from "react";
import "./ColorCard.scss";
class ColorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: this.props.isClicked,
      number: this.props.likesNum
    };
  }
  changeImg = e => {
    // console.dir(e.target);
    this.setState({
      clicked: !this.state.clicked,
      number: this.state.clicked
        ? parseInt(e.target.innerText) - 1
        : parseInt(e.target.innerText) + 1
    });
  };
  render() {
    console.log("ddd", this.state.number);
    console.log(this.props.likesNum);
    const blueHeart =
      "https://colorhunt.co/img/color-hunt-palettes-icon-heart-blue.png";
    const redHeart =
      "https://colorhunt.co/img/color-hunt-palettes-icon-heart.png";
    return (
      <div className="ColorCard">
        <div className="colorList">
          <div
            className="color no4"
            style={{ backgroundColor: this.props.color1 }}
          >
            <span className="rgbName">{this.props.color1}</span>
          </div>
          <div
            className="color no3"
            style={{ backgroundColor: this.props.color2 }}
          >
            <span className="rgbName">{this.props.color2}</span>
          </div>
          <div
            className="color no2"
            style={{ backgroundColor: this.props.color3 }}
          >
            <span className="rgbName">{this.props.color3}</span>
          </div>
          <div
            className="color no1"
            style={{ backgroundColor: this.props.color4 }}
          >
            <span className="rgbName">{this.props.color4}</span>
          </div>
        </div>
        <div className="cardBottom" onClick={this.changeImg}>
          <button className="likes">
            <img
              className="heart"
              alt="Heart"
              src={this.state.clicked ? redHeart : blueHeart}
            />
            <span className="likesNum">{this.state.number}</span>
          </button>
          <div className="date">{this.props.date}</div>
        </div>
      </div>
    );
  }
}
export default ColorCard;
