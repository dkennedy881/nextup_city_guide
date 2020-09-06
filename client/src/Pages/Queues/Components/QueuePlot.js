import React, { useState } from "react";

import "../style.css";

//comps
import { QueueListItem } from "../Components/QueueListItem";

const K_WIDTH = 20;
const K_HEIGHT = 20;
const QueuePlot = ({ data, showPlotTitles }) => {
  const [doShowDetails, setDoShowDetails] = useState(false);

  return doShowDetails ? (
    <div
      onClick={() => {
        setDoShowDetails(!doShowDetails);
      }}
    >
      <div
        style={{
          minWidth: "150px",
          position: "relative",
          top: -(K_HEIGHT * 3),
          left: -(K_WIDTH + 50),
          zIndex: 2,
        }}
      >
        <QueueListItem queueItem={data} onMap={true} />
      </div>

      <div
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
    </div>
  ) : (
    <div
      onClick={() => {
        setDoShowDetails(!doShowDetails);
      }}
    >
      {showPlotTitles ? (
        <p
          style={{
            width: "150px",
            position: "relative",
            top: -(K_HEIGHT + 10),
            left: -(K_WIDTH + 20),
            zIndex: 1,
            fontWeight: 900,
          }}
        >
          {data.title}
        </p>
      ) : (
        <></>
      )}
      <div
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
    </div>
  );
};

export { QueuePlot };
