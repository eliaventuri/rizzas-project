// App.js
import React, { useState, useEffect } from "react";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import FinalScreen from "./components/FinalScreen";
import MobileWarning from "./components/MobileWarning";
import LevelIndicator from "./components/LevelIndicator";

function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android|iPad|iPhone|iPod/.test(userAgent.toLowerCase())) {
        setIsMobile(true);
      }
    };
    checkIfMobile();
  }, []);

  const advanceLevel = () => {
    setCurrentLevel(currentLevel + 1);
  };

  if (isMobile) {
    return <MobileWarning />;
  }

  return (
    <div className="App">
      <LevelIndicator currentLevel={currentLevel} />
      {currentLevel === 1 && <Level1 onComplete={advanceLevel} />}
      {currentLevel === 2 && <Level2 onComplete={advanceLevel} />}
      {currentLevel === 3 && <Level3 onComplete={advanceLevel} />}
      {currentLevel === 4 && <FinalScreen />}
    </div>
  );
}

export default App;
