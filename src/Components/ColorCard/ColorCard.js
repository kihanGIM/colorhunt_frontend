import React from "react";
import "./ColorCard.scss";

class ColorCard extends React.Component {
  render() {
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
        <div className="cardBottom">
          <button className="likes">
            <img
              className="heart"
              alt="Heart"
              src={
                // "https://colorhunt.co/img/color-hunt-palettes-icon-heart-blue.png"
                "https://colorhunt.co/img/color-hunt-palettes-icon-heart.png"
              }
            />
            <span className="likesNum">{this.props.likesNum}</span>
          </button>
          <div className="date">{this.props.date}</div>
        </div>
      </div>
    );
  }
}
export default ColorCard;
