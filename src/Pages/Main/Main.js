import React from "react";
import ColorCard from "../../Components/ColorCard/ColorCard";
import "./Main.scss";
import Header from "../../Component/Header/Header";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      fetchData: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/colorCardData.json", {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          fetchData: response.colorCardData
        });
      });
  };

  render() {
    const cardList = this.state.fetchData.map(card => {
      return (
        <ColorCard
          color1={card.one}
          color2={card.two}
          color3={card.three}
          color4={card.four}
          likesNum={card.likesNum}
          date={card.date}
        />
      );
    });
    return (
      <div>
        <Header />
        <div className="Main">
          <div className="mainBody">
            <div className="cardsContainer">{cardList}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
