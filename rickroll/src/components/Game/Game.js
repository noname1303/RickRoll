import React, { Component } from "react";
import { connect } from "react-redux";
import GameDetail from "../GameDetail/GameDetail";
import Roll from "../Roll/Roll";
import "./Game.css";
class Game extends Component {
  render() {
    return (
      <div className="game">
        <h1 className="game-title">Rick Roll</h1>
        <div className="row">
          <div className="col-4">
            <button
              onClick={() => this.props.bet(true)}
              className="btn btn-primary btnGame"
            >
              Tai
            </button>
          </div>
          <div className="col-4">
            <Roll />
          </div>
          <div className="col-4">
            <button
              onClick={() => this.props.bet(false)}
              className="btn btn-primary btnGame"
            >
              Xiu
            </button>
          </div>
        </div>
        <GameDetail />
        <button
          onClick={() => this.props.playGame()}
          className="btn btn-success"
        >
          Play game
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bet: (roll) => {
      let action = {
        type: "BET",
        roll,
      };
      dispatch(action);
    },
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Game);
