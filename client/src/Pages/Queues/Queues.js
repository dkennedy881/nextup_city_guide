import React, { useState, useEffect } from "react";
import { useAsync } from "react-async";
import { Button } from "react-bootstrap";
import Axios from "axios";
import GoogleMapReact from "google-map-react";

import "./style.css";
const K_WIDTH = 20;
const K_HEIGHT = 20;
const AnyReactComponent = ({ text }) => {
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

//comps

const getQueues = async () => {
  let { data: queueDataA } = await Axios.post(
    "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/nextup-ssnrm/service/getQueues/incoming_webhook/webhook0"
  );
  return queueDataA;
};

const Queues = () => {
  const [doShowList, setDoShowList] = useState(false);

  const { data, error, isPending } = useAsync({
    promiseFn: getQueues,
    onResolve: (data) => {
      setQueueItems(data);
    },
  });

  // useEffect(() => {AIzaSyDl4Fg7fPNuqn0fd2RV-LkXp7bLTuE0HxI
  //   console.log(data);
  // }, [data]);

  const [queueItems, setQueueItems] = useState([]);

  //TODO need async render with pending / error state involved

  //TODO build map functionality

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
                <p className="queueListItemCountInLine">In Line</p>
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
    <div
      style={{
        height: "93vh",
        width: "100%",
        position: "relative",
        top: "-70px",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDl4Fg7fPNuqn0fd2RV-LkXp7bLTuE0HxI" }}
        options={{ fullscreenControl: false }}
        defaultCenter={{
          lat: 38.95,
          lng: -108.3,
        }}
        defaultZoom={4.1}
      >
        <AnyReactComponent lat={47.955413} lng={-122.337844} text="My Marker" />
        <AnyReactComponent lat={29.955413} lng={-95.337844} text="My Marker" />
        <AnyReactComponent lat={30.955413} lng={-97.337844} text="My Marker" />
        <AnyReactComponent lat={29.913} lng={-95.844} text="My Marker" />
        <AnyReactComponent lat={29.955} lng={-96.337} text="My Marker" />
      </GoogleMapReact>
    </div>
  );

  return (
    <div className="container-fluid" id="QueueContainer">
      <div className="row" id="QueueContainerRow">
        <div className="col-lg-12" id="toggleQueueContent">
          {ToggleContentBtn}
        </div>
        {ContentToDisplay}
      </div>
    </div>
  );
};

export { Queues };
