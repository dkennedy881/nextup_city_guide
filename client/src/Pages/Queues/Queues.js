import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./style.css";

//comps

const Queues = () => {
  const [doShowList, setDoShowList] = useState(false);
  const [queueItems, setQueueItems] = useState([
    { name: "Some Place" },
    { name: "other place" },
    { name: "Hey another one place" },
    { name: "Last One" },
    { name: "Next Up" },
    { name: "Is the best" },
    { name: "Place" },
  ]);

  //TODO need async render
  //TODO if queue selected (show details)

  const ToggleContentBtn = doShowList ? (
    <Button
      variant="light"
      onClick={() => setDoShowList(!doShowList)}
      className="queueToggleBtn"
    >
      Show Map
    </Button>
  ) : (
    <Button
      variant="light"
      onClick={() => setDoShowList(!doShowList)}
      className="queueToggleBtn"
    >
      Show List
    </Button>
  );

  const QueueItemsToRender = () => {
    return queueItems.reduce((acc, cur) => {
      acc.push(<div className="queueListItem">{cur.name}</div>);
      return acc;
    }, []);
  };

  const ContentToDisplay = doShowList ? (
    <div className="col-lg-12" id="QueueListContainer">
      {QueueItemsToRender()}
    </div>
  ) : (
    <div className="col-lg-12">
      <p>This is map</p>
    </div>
  );

  return (
    <div className="container-fluid" id="QueueContainer">
      <div className="row">
        <div className="col-lg-12" id="toggleQueueContent">
          {ToggleContentBtn}
        </div>
        {ContentToDisplay}
      </div>
    </div>
  );
};

export { Queues };
