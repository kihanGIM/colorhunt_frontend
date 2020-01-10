import React from "react";
import "./ColorCard.scss";

class ColorCard extends React.Component {
  render() {
    return (
      <div className="ColorCard">
        <div className="colorList">
          <div className="color no4">
            <span className="rgbName">#ff8364</span>
          </div>
          <div className="color no3">
            <span className="rgbName">#ffb677</span>
          </div>
          <div className="color no2">
            <span className="rgbName">#5f6caf</span>
          </div>
          <div className="color no1">
            <span className="rgbName">#edf7fa</span>
          </div>
        </div>
        <div className="cardBottom">
          <button className="likes">
            <img
              className="heart"
              alt="Heart"
              src={
                "https://colorhunt.co/img/color-hunt-palettes-icon-heart.png"
              }
            />
            <span>26</span>
          </button>
          <div className="date">today</div>
        </div>
      </div>
    );
  }
}
export default ColorCard;
