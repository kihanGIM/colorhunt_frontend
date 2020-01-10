import React from "react";
import ColorCard from "../../Components/ColorCard/ColorCard";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <div className="navBar">NavBar</div>
        <div className="mainBody">
          <div className="cardsContainer">
            <ColorCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
