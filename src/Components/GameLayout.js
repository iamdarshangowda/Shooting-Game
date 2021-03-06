import React from "react";
import { Link } from "react-router-dom";

export default function GameLayout(props) {
  return (
    <div className="game-container">
      <h1>Round {props.round}</h1>
      {props.round === 3 && <span className="lastRound">Last Round</span>}
      {props.round < 3 && <span className="roundInfo">Total 3 Rounds</span>}
      <div className="players">
        {/*Player One */}
        <section className="player-data">
          <h3>Player 1</h3>
          <div className="health">
            <label htmlFor="health" className="bar">
              Health:
            </label>
            <progress
              id="health"
              value={props.playerOne.health}
              min="0"
              max="100"
            ></progress>
          </div>
          <button
            className="shoot-btn"
            onClick={props.shootOne}
            disabled={!props.playerOne.isNext}
          >
            Shoot
          </button>
        </section>
        {/*Player Two */}
        <section className="player-data">
          <h3>Player 2</h3>
          <div className="health">
            <label htmlFor="health" className="bar">
              Health:
            </label>
            <progress
              id="health"
              value={props.playerTwo.health}
              min="0"
              max="100"
            ></progress>
          </div>
          <button
            className="shoot-btn"
            onClick={props.shootTwo}
            disabled={!props.playerTwo.isNext}
          >
            Shoot
          </button>
        </section>
      </div>
      <section className="score-card">
        <h2>Score Card</h2>
        <p>
          Player 1 : <span>{props.playerOneScore} Points</span>
        </p>
        <p>
          Player 2 : <span>{props.playerTwoScore} Points</span>
        </p>
      </section>
      {props.winner.gameOver && <h2>Player {props.winner.game} Won!</h2>}
      <Link to="/">
        <button className="btn">Exit Game</button>
      </Link>
      <button className="btn" onClick={props.reset}>
        Reset Game
      </button>
    </div>
  );
}
