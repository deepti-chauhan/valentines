import React, { useState } from "react";
import requestGif from "./assets/mocha_request.gif";
import happyGif from "./assets/mocha_happy.gif";
import "./App.css";

function App() {
  const [isYes, setIsYes] = useState<boolean>(false);
  const [padding, setPadding] = useState<number>(10);

  const yesButtonStyle: React.CSSProperties = {
    padding: `${padding}px`,
    marginRight: "10px",
    backgroundColor: "green",
  };

  const noButtonStyle: React.CSSProperties = {
    padding: "10px",
    backgroundColor: "red",
  };
  const handleYesClick = () => {
    setPadding(10);
    setIsYes(true);
  };
  const handleNoClick = () => {
    setPadding((padding) => padding + 10);
    setIsYes(false);
  };

  return (
    <div className="App">
      <h1>Dear Boyfriend</h1>
      {!isYes ? <h1>Will you be my valentines?</h1> : <h1>Yaayy!!</h1>}

      {isYes ? (
        <img src={happyGif} width={400} height={300} />
      ) : (
        <img src={requestGif} width={400} height={300} />
      )}

      <div>
        <button onClick={handleYesClick} style={yesButtonStyle} className="">
          Yes
        </button>
        <button onClick={handleNoClick} style={noButtonStyle}>
          No
        </button>
      </div>
    </div>
  );
}

export default App;
