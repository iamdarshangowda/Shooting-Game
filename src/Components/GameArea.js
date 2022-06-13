import React, { useState, useEffect } from "react";
import GameLayout from "./GameLayout";

export default function GameArea() {
  const [playerOne, setPlayerOne] = useState({
    isNext: true,
    health: 100,
  });

  const [playerTwo, setPlayerTwo] = useState({
    isNext: true,
    health: 100,
  });

  const [playerOneScore, setplayerOneScore] = useState(0);
  const [playerTwoScore, setplayerTwoScore] = useState(0);

  const [round, setRound] = useState(1);

  function playerOneShoot() {
    if (playerOne.health > 0 && playerTwo.health > 0) {
      const random = Math.floor(Math.random() * 40);
      setPlayerTwo((prev) => ({
        ...prev,
        isNext: true,
        health: playerTwo.health - random,
      }));
      setPlayerOne((prev) => ({
        ...prev,
        isNext: false,
      }));
    } else if (round < 5) {
      playerOne.health <= 0
        ? setplayerTwoScore((prev) => prev + 1)
        : setplayerOneScore((prev) => prev + 1);
      setPlayerOne({
        isNext: true,
        health: 100,
      });
      setPlayerTwo({
        isNext: true,
        health: 100,
      });
    } else {
      setplayerTwoScore(0);
      setplayerOneScore(0);
      setRound(1);
      setPlayerOne({
        isNext: true,
        health: 100,
      });
      setPlayerTwo({
        isNext: true,
        health: 100,
      });
    }
  }

  function playerTwoShoot() {
    if (playerOne.health > 0 && playerTwo.health > 0) {
      const random = Math.floor(Math.random() * 40);
      setPlayerOne((prev) => ({
        ...prev,
        isNext: true,
        health: playerOne.health - random,
      }));
      setPlayerTwo((prev) => ({
        ...prev,
        isNext: false,
      }));
    } else if (round < 5) {
      playerOne.health <= 0
        ? setplayerTwoScore((prev) => prev + 1)
        : setplayerOneScore((prev) => prev + 1);
      setRound((prev) => prev + 1);
      setPlayerOne({
        isNext: true,
        health: 100,
      });
      setPlayerTwo({
        isNext: true,
        health: 100,
      });
    } else {
      setplayerTwoScore(0);
      setplayerOneScore(0);
      setRound(1);
      setPlayerOne({
        isNext: true,
        health: 100,
      });
      setPlayerTwo({
        isNext: true,
        health: 100,
      });
    }
  }

  const styleOne = {
    background: playerOne.health < 20 ? "red" : "blue",
  };

  return (
    <GameLayout
      round={round}
      playerOne={playerOne}
      playerTwo={playerTwo}
      shootOne={playerOneShoot}
      shootTwo={playerTwoShoot}
      playerOneScore={playerOneScore}
      playerTwoScore={playerTwoScore}
    />
  );
}
