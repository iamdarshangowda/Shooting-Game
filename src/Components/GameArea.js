import React, { useState } from "react";
import GameLayout from "./GameLayout";

export default function GameArea() {
  const initialScore = {
    isNext: true,
    health: 100,
  };

  const [playerOne, setPlayerOne] = useState(initialScore);
  const [playerTwo, setPlayerTwo] = useState(initialScore);

  const [playerOneScore, setplayerOneScore] = useState(0);
  const [playerTwoScore, setplayerTwoScore] = useState(0);

  const [round, setRound] = useState(1);
  const [winner, setWinner] = useState({});

  function random() {
    return Math.floor(Math.random() * 6);
  }

  function checkHealth() {
    return playerTwo.health <= 0
      ? setplayerOneScore((prev) => prev + 1)
      : setplayerTwoScore((prev) => prev + 1);
  }

  function playerOneShoot() {
    if (
      playerOne.health > 0 &&
      playerTwo.health > 0 &&
      playerOneScore < 3 &&
      playerTwoScore < 3
    ) {
      setPlayerTwo((prev) => ({
        ...prev,
        isNext: true,
        health: prev.health - random(),
      }));
      setPlayerOne((prev) => ({
        ...prev,
        isNext: false,
      }));
      setWinner({
        gameOver: false,
        game: "",
      });
    } else if (playerOneScore < 3 && playerTwoScore < 3) {
      setPlayerOne(initialScore);
      setPlayerTwo(initialScore);
      setRound((prev) => prev + 1);
      checkHealth();
    } else if (playerOneScore === 3 || playerTwoScore === 3) {
      setRound(1);
      setPlayerOne(initialScore);
      setPlayerTwo(initialScore);
      setWinner((prev) => ({
        ...prev,
        gameOver: true,
        game: playerOneScore < playerTwoScore ? 2 : 1,
      }));
      setplayerOneScore(0);
      setplayerTwoScore(0);
    }
  }

  function playerTwoShoot() {
    if (
      playerOne.health > 0 &&
      playerTwo.health > 0 &&
      playerOneScore < 3 &&
      playerTwoScore < 3
    ) {
      setPlayerOne((prev) => ({
        ...prev,
        isNext: true,
        health: playerOne.health - random(),
      }));
      setPlayerTwo((prev) => ({
        ...prev,
        isNext: false,
      }));
      setWinner({
        gameOver: false,
        game: "",
      });
    } else if (playerOneScore < 3 && playerTwoScore < 3) {
      setPlayerOne(initialScore);
      setPlayerTwo(initialScore);
      setRound((prev) => prev + 1);
      checkHealth();
    } else if (playerOneScore === 3 || playerTwoScore === 3) {
      setRound(1);
      setPlayerOne(initialScore);
      setPlayerTwo(initialScore);
      setWinner((prev) => ({
        ...prev,
        gameOver: true,
        game: playerOneScore < playerTwoScore ? 2 : 1,
      }));
      setplayerOneScore(0);
      setplayerTwoScore(0);
    }
  }

  return (
    <GameLayout
      round={round}
      winner={winner}
      playerOne={playerOne}
      playerTwo={playerTwo}
      shootOne={playerOneShoot}
      shootTwo={playerTwoShoot}
      playerOneScore={playerOneScore}
      playerTwoScore={playerTwoScore}
    />
  );
}
