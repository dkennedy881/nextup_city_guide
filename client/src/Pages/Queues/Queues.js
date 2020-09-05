import React, { useState, useEffect } from "react";
import { useAsync } from "react-async";
import { Button } from "react-bootstrap";
import Axios from "axios";

import "./style.css";

//comps
import { QueueListItem } from "./Components/QueueListItem";
import { QueueMap } from "./Components/QueueMap";

const getQueues = async () => {
  let { data: queueDataA } = await Axios.post(
    "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/nextup-ssnrm/service/getQueues/incoming_webhook/webhook0"
  );
  return queueDataA;
};

//TODO need async render with pending / error state involved

//TODO build map functionality

//TODO if queue selected (show details)

const Queues = () => {
  const [doShowList, setDoShowList] = useState(false);
  const [queueItems, setQueueItems] = useState([]);

  const fetchQueueController = useAsync({
    deferFn: getQueues,
    onResolve: (data) => {
      setQueueItems(data);
    },
  });

  useEffect(() => {
    fetchQueueController.run();
  }, []);

  useEffect(() => {
    if (doShowList) {
      window.scrollTo(0, 0);
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
      document.querySelector("#QueueListContainer").scrollTo(0, 0);
    }
  }, [doShowList]);

  const ToggleContentBtnRow = doShowList ? (
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

  const ContentToDisplay = doShowList ? (
    <div className="col-lg-12" id="QueueListContainer">
      {queueItems.reduce((acc, cur) => {
        acc.push(<QueueListItem queueItem={cur} key={cur.id["$numberLong"]} />);
        return acc;
      }, [])}
    </div>
  ) : (
    <QueueMap queueItems={queueItems} />
  );

  return (
    <div className="container-fluid" id="QueueContainer">
      <div className="row" id="QueueContainerRow">
        <div className="col-lg-12" id="toggleQueueContent">
          {ToggleContentBtnRow}
        </div>
        <QueueMap queueItems={queueItems} />
        <div
          className={`col-lg-12 ${doShowList ? "" : "hide"}`}
          id="QueueListContainer"
        >
          {queueItems.map((queueItem) => (
            <QueueListItem
              queueItem={queueItem}
              key={queueItem.id["$numberLong"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Queues };
