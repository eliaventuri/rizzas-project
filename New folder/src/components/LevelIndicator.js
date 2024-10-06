import React from "react";
import "./LevelIndicator.css";

function LevelIndicator({ currentLevel }) {
  return (
    <div className="level-indicator-container">
      <div className={`level-indicator ${currentLevel === 1 ? "active" : ""}`}>
        1
      </div>
      <div className={`level-indicator ${currentLevel === 2 ? "active" : ""}`}>
        2
      </div>
      <div className={`level-indicator ${currentLevel === 3 ? "active" : ""}`}>
        3
      </div>
      <div className={`level-indicator ${currentLevel === 4 ? "active" : ""}`}>
        ?
      </div>
    </div>
  );
}

export default LevelIndicator;
