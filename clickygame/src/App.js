import React from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import hobbits from "./hobbits.json";
import './App.css';

class App extends React.Component {
  state = {
    hobbits,
    clickedHobbits: [],
    score: 0
  };

  imageClick = event => {
    const currentHobbit = event.target.alt;
    const HobbitAlreadyClicked =
      this.state.clickedHobbits.indexOf(currentHobbit) > -1;

    if (HobbitAlreadyClicked) {
      this.setState({
        hobbits: this.state.hobbits.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedHobbits: [],
        score: 0
      });
      alert("You have lose, would you care to play again?");

    } else {
      this.setState(
        {
          hobbits: this.state.hobbits.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedHobbits: this.state.clickedHobbits.concat(
            currentHobbit
          ),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("Congrats! You Won!");
            this.setState({
              hobbits: this.state.fish.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedHobbits: [],
              score: 0
            });
          }
        }
      );
    }
  };
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.hobbits.map(hobbits => (
            <FriendCard
              imageClick={this.imageClick}
              id={hobbits.id}
              key={hobbits.id}
              image={hobbits.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
