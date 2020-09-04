import React, { useState, useEffect } from "react";
import { useAsync } from "react-async";
import { Button } from "react-bootstrap";
import Axios from "axios";
import "./style.css";

//comps

const getQueues = async () => {
  let { data: queueDataA } = await Axios.post(
    "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/nextup-ssnrm/service/getQueues/incoming_webhook/webhook0"
  );
  console.log(queueDataA);
  return queueDataA;
};

const Queues = () => {
  const [doShowList, setDoShowList] = useState(true);

  const { data, error, isPending } = useAsync({
    promiseFn: getQueues,
    onResolve: (data) => {
      setQueueItems(data);
    },
  });

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const [queueItems, setQueueItems] = useState([]);

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
      acc.push(
        <div className="queueListItem" key={cur.id["$numberLong"]}>
          <div className="queueListItemTitleContainer">
            <span className="queueListItemTitle">{cur.title}</span>
          </div>
          <div className="queueListItemMeta">
            <div className="queueListItemMetaLeft">
              <p className="queueListItemMessage">{cur.message}</p>
              <div className="queueListItemAddressContainer">
                <span>{`${cur.address}, ${cur.zipCode}`}</span>
                <br />
                <span>{`${cur.city}, ${cur.state}`}</span>
              </div>
              <span className="queueListItemOOO">
                need to find out todays ooo :(
              </span>
            </div>
            <div className="queueListItemMetaRight">
              <div className="queueListItemCountContaier">
                <span className="queueListItemCount">
                  {cur.count["$numberLong"]}
                </span>
                <span className="queueListItemCountInLine">In Line</span>
              </div>
            </div>
          </div>
        </div>
      );
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
