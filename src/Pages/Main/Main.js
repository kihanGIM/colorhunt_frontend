import React from "react";
import ColorCard from "../../Components/ColorCard/ColorCard";
import "./Main.scss";
import Header from "../../Component/Header/Header";

class Main extends React.Component {
  render() {
    let colorCardData = [
      {
        one: "#f8c3af",
        two: "#fea5ad",
        three: "#ea9abb",
        four: "#be8abf",
        likesNum: 459,
        date: "2weeks ago"
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
      },
      {
        one: "#d6e5fa",
        two: "#fef6fb",
        three: "#e6b2c6",
        four: "#d77fa1",
        likesNum: 1089,
        date: "1month ago"
      },
      {
        one: "#f1f1f6",
        two: "#e1ccec",
        three: "#c9b6e4",
        four: "#be9fe1",
        likesNum: 545,
        date: "3months ago "
      },
      {
        one: "#fddb3a",
        two: "#d5c455",
        three: "#ede59a",
        four: "#f6f4e6",
        likesNum: 267,
        date: "1week ago"
      },

      {
        one: "#e8ffe8",
        two: "#a6fff2",
        three: "#74f9ff",
        four: "#00e0ff",
        likesNum: 5369,
        date: "3 years ago"
      },

      {
        one: "#eef5b2",
        two: "#6decb9",
        three: "#42dee1",
        four: "#3fc5f0",
        likesNum: 1251,
        date: "2months ago"
      },
      {
        one: "#446491",
        two: "#4b89ac",
        three: "#ace6f6",
        four: "#e4fcf9",
        likesNum: 1867,
        date: "3years ago"
      },

      {
        one: "#bbe1fa",
        two: "#3282b8",
        three: "#0f4c75",
        four: "#1b262c",
        likesNum: 736,
        date: "2weeks ago"
      },
      {
        one: "#daf4f5",
        two: "#c4dce0",
        three: "#abcecf",
        four: "#80a3a2",
        likesNum: 2009,
        date: "4years ago"
      },
      {
        one: "#e5e4cc",
        two: "#bac7a7",
        three: "#889e81",
        four: "#698474",
        likesNum: 590,
        date: "4weeks ago"
      },

      {
        one: "#c7f0db",
        two: "#8bbabb",
        three: "#6c7b95",
        four: "#464159",
        likesNum: 833,
        date: "1month ago"
      },

      {
        one: "#f5eaea",
        two: "#7fcd91",
        three: "#5b5656",
        four: "#4d4646",
        likesNum: 336,
        date: "6days ago"
      },
      {
        one: "#e5e4cc",
        two: "#bac7a7",
        three: "#889e81",
        four: "#698474",
        likesNum: 590,
        date: "4weeks ago"
      },

      {
        one: "#daf4f5",
        two: "#c4dce0",
        three: "#abcecf",
        four: "#80a3a2",
        likesNum: 2009,
        date: "4years ago"
      },
      {
        one: "#c7f0db",
        two: "#8bbabb",
        three: "#6c7b95",
        four: "#464159",
        likesNum: 833,
        date: "1month ago"
      },
      {
        one: "#d15a7c",
        two: "#ee8972",
        three: "#f7d695",
        four: "#f6eec7",
        likesNum: 79,
        date: "yesterday"
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
