// components/Level2.js
import React, { useState, useEffect } from "react";
import "./Level2.css";

function Level2({ onComplete }) {
  const [ball, setBall] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBall = {
        id: Date.now(),
        top: Math.random() * 80 + 10 + "%", // Posizione casuale dall'alto
        left: Math.random() * 80 + 10 + "%", // Posizione casuale da sinistra
      };
      setBall(newBall);
      setTimeout(() => setBall(null), 2000); // Il gomitolo scompare dopo 2 secondi
    }, 3000); // Un gomitolo appare ogni 3 secondi

    return () => clearInterval(interval);
  }, []);

  const handleBallClick = (id) => {
    if (ball && ball.id === id) {
      setBall(null);
      setScore((prevScore) => prevScore + 1);
    }
  };

  useEffect(() => {
    if (score >= 10) {
      onComplete();
    }
  }, [score, onComplete]);

  return (
    <div className="level2-container">
      <h2 className="level2-title">Gioco di reazione a tema uncinetto</h2>
      <div className="score">Punteggio: {score}</div>
      {ball && (
        <div
          key={ball.id}
          className="ball"
          style={{ top: ball.top, left: ball.left }}
          onClick={() => handleBallClick(ball.id)}
        >
          <img src="/images/yarn-ball.png" alt="yarn ball" />
        </div>
      )}
    </div>
  );
}

export default Level2;
