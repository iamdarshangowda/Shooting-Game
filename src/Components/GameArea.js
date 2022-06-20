import React, { useState } from "react";
import GameLayout from "./GameLayout";

export default function GameArea() {
  const initialScore = {
    isNext: true,
    health: 100,
  };

  const [playerOne, setPlayerOne] = useState(initialScore);
  const [playerTwo, setPlayerTwo] = useState(initialScore);

  const [playerOneScore, setplayerOneScore] = useState(
    Number(localStorage.getItem("player1") || 0)
  );
  const [playerTwoScore, setplayerTwoScore] = useState(
    Number(localStorage.getItem("player2") || 0)
  );

  const [round, setRound] = useState(
    Number(localStorage.getItem("round") || 1)
  );
  const [winner, setWinner] = useState({
    gameOver: false,
    game: "",
  });

  function setPlayerOneScoreHandeler(playerOneScore) {
    setplayerOneScore(playerOneScore);
    localStorage.setItem("player1", JSON.stringify(playerOneScore));
  }
  function setPlayerTwoScoreHandeler(playerTwoScore) {
    setplayerTwoScore(playerTwoScore);
    localStorage.setItem("player2", JSON.stringify(playerTwoScore));
  }

  function setRoundHandeler(round) {
    setRound(round);
    localStorage.setItem("round", JSON.stringify(round));
  }

  function random() {
    return Math.floor(Math.random() * 50);
  }

  function checkHealth() {
    return playerTwo.health <= 0
      ? setPlayerOneScoreHandeler(playerOneScore + 1)
      : setPlayerTwoScoreHandeler(playerTwoScore + 1);
  }

  function playerOneShoot() {
    if (
      playerOne.health > 0 &&
      playerTwo.health > 0 &&
      playerOneScore < 2 &&
      playerTwoScore < 2
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
    } else if (playerOneScore < 2 && playerTwoScore < 2) {
      setPlayerOne(initialScore);
      setPlayerTwo(initialScore);
      round >= 3 ? setRoundHandeler(round) : setRoundHandeler(round + 1);
      checkHealth();
    } else if (playerOneScore === 2 || playerTwoScore === 2) {
      checkWinner();
    }
  }

  function playerTwoShoot() {
    if (
      playerOne.health > 0 &&
      playerTwo.health > 0 &&
      playerOneScore < 2 &&
      playerTwoScore < 2
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
    } else if (playerOneScore < 2 && playerTwoScore < 2) {
      setPlayerOne(initialScore);
      setPlayerTwo(initialScore);
      round >= 3 ? setRoundHandeler(round) : setRoundHandeler(round + 1);
      checkHealth();
    } else if (playerOneScore === 2 || playerTwoScore === 2) {
      checkWinner();
    }
  }

  function checkWinner() {
    setWinner((prev) => ({
      ...prev,
      gameOver: true,
      game: playerOneScore < playerTwoScore ? 2 : 1,
    }));
  }

  function handleReset() {
    setRoundHandeler(1);
    setPlayerOne(initialScore);
    setPlayerTwo(initialScore);
    setPlayerOneScoreHandeler(0);
    setPlayerTwoScoreHandeler(0);
    setWinner((prev) => ({
      ...prev,
      gameOver: false,
      game: "",
    }));
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
      reset={handleReset}
    />
  );
}
