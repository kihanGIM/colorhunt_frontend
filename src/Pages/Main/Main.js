import React from "react";
import ColorCard from "../../Components/ColorCard/ColorCard";
import "./Main.scss";
import Header from "../../Component/Header/Header";

class Main extends React.Component {
  render() {
    let colorCardData = [
      {
        one: "#ff8364",
        two: "#ffb677",
        three: "#5f6caf",
        four: "#edf7fa",
        likesNum: 26,
        date: "today"
      },
      {
        one: "#63b7af",
        two: "#347474",
        three: "#35495e",
        four: "#ee8572",
        likesNum: 37,
        date: "just now"
      },

      {
        one: "#f8c3af",
        two: "#fea5ad",
        three: "#ea9abb",
        four: "#be8abf",
        likesNum: 459,
        date: "2weeks ago"
      },

      {
        one: "#d15a7c",
        two: "#ee8972",
        three: "#f7d695",
        four: "#f6eec7",
        likesNum: 79,
        date: "yesterday"
      },

      {
        one: "#8ac6d1",
        two: "#bbded6",
        three: "#fae3d9",
        four: "#ffb6b9",
        likesNum: 390,
        date: "8days ago"
      },

      {
        one: "#ffeecc",
        two: "#ffddcc",
        three: "#ffcccc",
        four: "#ffbbcc",
        likesNum: 69,
        date: "2hours ago"
      }
    ];

    const cardList = colorCardData.map(card => {
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
          {/* <div className="navBar">NavBar</div> */}

          <div className="mainBody">
            <div className="cardsContainer">{cardList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
