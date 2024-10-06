import React, { useState, useEffect } from "react";
import "./Level3.css";

const maze = [
  ["S", " ", " ", "X", " ", " ", " ", "X", " ", "?"],
  ["X", "X", " ", "X", " ", "X", " ", "X", " ", "X"],
  [" ", " ", " ", " ", " ", "X", " ", " ", " ", " "],
  [" ", "X", "X", "X", " ", "X", "X", "X", "X", " "],
  [" ", " ", " ", "X", " ", " ", " ", " ", "X", " "],
  ["X", "X", " ", "X", "X", "X", "X", " ", "X", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", "X", " "],
  [" ", "X", "X", "X", "X", "X", "X", " ", "X", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", "X", " "],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", " "],
];

function Level3({ onComplete }) {
  const [playerPosition, setPlayerPosition] = useState({ row: 0, col: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { row, col } = playerPosition;
      let newRow = row;
      let newCol = col;

      if (event.key === "ArrowUp") newRow = row > 0 ? row - 1 : row;
      if (event.key === "ArrowDown")
        newRow = row < maze.length - 1 ? row + 1 : row;
      if (event.key === "ArrowLeft") newCol = col > 0 ? col - 1 : col;
      if (event.key === "ArrowRight")
        newCol = col < maze[0].length - 1 ? col + 1 : col;

      if (maze[newRow][newCol] !== "X") {
        setPlayerPosition({ row: newRow, col: newCol });
        if (maze[newRow][newCol] === "?") {
          onComplete();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playerPosition, onComplete]);

  return (
    <div className="level3-container">
      <h2>Level 3!</h2>
      <div className="maze">
        {maze.map((row, rowIndex) => (
          <div key={rowIndex} className="maze-row">
            {row.map((cell, colIndex) => {
              const isPlayer =
                playerPosition.row === rowIndex &&
                playerPosition.col === colIndex;
              const isVisible =
                Math.abs(playerPosition.row - rowIndex) <= 1 &&
                Math.abs(playerPosition.col - colIndex) <= 1;
              return (
                <div
                  key={colIndex}
                  className={`maze-cell ${
                    isPlayer
                      ? "player"
                      : cell === "X"
                      ? "wall"
                      : cell === "?"
                      ? "exit"
                      : ""
                  } ${isVisible ? "visible" : "hidden"}`}
                >
                  {isPlayer ? (
                    <img src="images/player.png" alt="player" />
                  ) : cell === "?" ? (
                    "?"
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Level3;
