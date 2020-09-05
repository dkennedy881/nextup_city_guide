import React, { useState } from "react";

import "../style.css";

const K_WIDTH = 20;
const K_HEIGHT = 20;
const QueuePlot = ({ text }) => {
  const [doShowDetails, setDoShowDetails] = useState(false);

  return doShowDetails ? (
    <div
      onClick={() => {
        setDoShowDetails(!doShowDetails);
      }}
      style={{
        position: "absolute",
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT / 2,

        border: "5px solid #5dbecb",
        borderRadius: K_HEIGHT,
        backgroundColor: "red",
        textAlign: "center",
        color: "#3f51b5",
        fontSize: 16,
        fontWeight: "bold",
        padding: 4,
      }}
    ></div>
  ) : (
    <div
      onClick={() => {
        setDoShowDetails(!doShowDetails);
      }}
      style={{
        position: "absolute",
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT / 2,
        border: "5px solid red",
        borderRadius: K_HEIGHT,
        backgroundColor: "#5dbecb",
        textAlign: "center",
        color: "#3f51b5",
        fontSize: 16,
        fontWeight: "bold",
        padding: 4,
      }}
    ></div>
  );
};

export { QueuePlot };
