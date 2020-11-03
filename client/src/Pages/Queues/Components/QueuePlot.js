import React, { useState } from "react";

import "../style.css";

//comps
import { QueueListItem } from "../Components/QueueListItem";

const K_WIDTH = 12;
const K_HEIGHT = 12;
const QueuePlot = ({ data, showPlotTitles }) => {
  const [doShowDetails, setDoShowDetails] = useState(false);

  const setBackgroundcolor = () => {
    if (data.estMinutes && data.estMinutes["$numberLong"]) {
      const mins = data.estMinutes["$numberLong"];
      if (mins < 25) {
        return "#11a90f";
      } else {
        if (mins < 50) {
          return "yellow";
        } else {
          return "red";
        }
      }
    } else {
      return "blue";
    }
  };

  return doShowDetails ? (
    <div
      onClick={() => {
        setDoShowDetails(!doShowDetails);
      }}
    >
      <div
        style={{
          minWidth: "200px",
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
            width: "10px",
            position: "relative",
            top: -(K_HEIGHT + 10),
            left: -(K_WIDTH + 20),
            zIndex: 1,
            fontWeight: 900,
            borderWidth: ".5px",
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
          border: ".5px solid #5dbecb",
          borderRadius: K_HEIGHT,
          backgroundColor: setBackgroundcolor(),
          textAlign: "center",
          color: "#3f51b5",
          fontSize: 16,
          fontWeight: "bold",
          padding: 2,
        }}
      ></div>
    </div>
  );
};

export { QueuePlot };
