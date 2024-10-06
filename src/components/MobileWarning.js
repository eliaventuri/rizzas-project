import React from "react";
import "./MobileWarning.css";

function MobileWarning() {
  return (
    <div className="mobile-warning-container">
      <div className="mobile-warning-message">
        <h2>Oops!</h2>
        <p>
          It looks like you're trying to access this site from a mobile device.
        </p>
        <p>
          Unfortunately, we haven't developed a mobile version yet. Please visit
          us from a desktop. Sorry for the inconvenience!
        </p>
      </div>
    </div>
  );
}

export default MobileWarning;
