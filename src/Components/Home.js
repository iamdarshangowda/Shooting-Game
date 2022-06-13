import React from "react";
import { Link } from "react-router-dom";
import gun from "./images/gun.png";

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${gun})` }}>
      <section className="home-container">
        <h1>Shooting Game</h1>
        <section className="about-game">
          <h3>About the game</h3>
          <p>
            Shoot random number at opponent and decrease their health. The
            Player whose health reaches 0, dies and the game ends. There are 5
            such rounds, the player with the most game wins, wins the
            tournament.
          </p>
        </section>
        <Link to="/GameArea">
          <button className="btn">Start Game</button>
        </Link>
      </section>
    </div>
  );
}
