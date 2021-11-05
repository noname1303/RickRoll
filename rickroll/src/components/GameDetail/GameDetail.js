import React, { Component } from "react";
import { connect } from "react-redux";

class GameDetail extends Component {
  render() {
    return (
      <div>
        <div className="game-desc">
          <p className="you-choose">
            You choose: {this.props.roll ? "Tai" : "Xiu"}
          </p>
          <p className="score">
            Your score:
            <span style={{ color: "green" }}>{this.props.score}</span>
          </p>
          <p className="total-game">All game:{this.props.totalGame} </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    score: state.rollReducer.score,
    totalGame: state.rollReducer.totalGame,
    roll: state.rollReducer.roll,
  };
};

export default connect(mapStateToProps)(GameDetail);
