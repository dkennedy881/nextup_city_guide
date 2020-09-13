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
    document.querySelector("body").style.overflow = "visible";
    document.querySelector("body").scrollTo(0, 0);
    setTimeout(() => {
      document.querySelector("body").style.overflow = "hidden";
    }, 1000);
  });

  // init queue fetch
  useEffect(() => {
    fetchQueueController.run();
  }, []);

  // locks body scroll and scrolls queue list to the top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector("body").style.overflow = "visible";
    if (document.querySelector("#QueueListContainer")) {
      document.querySelector("#QueueListContainer").scrollTo(0, 0);
    }
    setTimeout(() => {
      document.querySelector("body").style.overflow = "hidden";
    });
  }, [doShowList]);

  const ToggleContentBtnContainer = ({ doShowList }) => {
    return (
      <div className="col-lg-12" id="toggleQueueContent">
        {doShowList ? (
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
        )}
      </div>
    );
  };

  const QueueListContainer = (
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
  );

  return (
    <div className="container-fluid" id="QueueContainer">
      <div className="row" id="QueueContainerRow">
        <ToggleContentBtnContainer doShowList={doShowList} />
        <QueueMap queueItems={queueItems} />
        {QueueListContainer}
      </div>
    </div>
  );
};

export { Queues };
