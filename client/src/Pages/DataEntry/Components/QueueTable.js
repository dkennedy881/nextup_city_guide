import React, { useState, useEffect } from "react";
import "../style.css";
import { Col, Button, Form } from "react-bootstrap";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/core";
import Axios from "axios";

const override = css`
  display: block;
`;
const QueueRow = ({ data, index }) => {
  const [queueData, setQueueData] = useState(data);
  const [message, setMessage] = useState(queueData.message);
  const [showUpdatedText, setShowUpdatedText] = useState(false);

  // useEffect(() => {
  //   console.log(queueData);
  // }, []);

  const updateUserQueue = async (id, estHours, estMinutes, message) => {
    return await new Promise(async (res, rej) => {
      // return;
      // TODO add phonenumber
      try {
        let { data: queueData } = await Axios.post(
          "https://webhooks.mongodb-realm.com/api/client/v2.0/app/nextup-ssnrm/service/updateHarrisCountyData/incoming_webhook/webhook0",
          {
            id: parseInt(id),
            estHours: parseInt(estHours),
            estMinutes: parseInt(estMinutes),
            message,
          }
        );
        // // return;
        let newJSON = {
          ...queueData,
          estHours: queueData.estHours["$numberLong"],
          estMinutes: queueData.estMinutes["$numberLong"],
        };

        res(newJSON);
      } catch (e) {
        alert(e);
      }
    });
  };

  const handleCountUpdate = async (amount) => {
    let updatedQueueData = {
      ...queueData,
      estMinutes: amount,
      estHours: 0,
      message,
    };

    await setQueueData(updatedQueueData);
    await setShowUpdatedText(true);
    const newData = await updateUserQueue(
      updatedQueueData.id["$numberLong"],
      updatedQueueData.estHours,
      updatedQueueData.estMinutes,
      updatedQueueData.message
    );
    setTimeout(() => {
      setShowUpdatedText(false);
    }, 2000);
  };

  return (
    <div
      className="row mt-3 mb-3"
      style={{
        borderStyle: "solid",
        borderColor: "#eee",
        borderRadius: 9,
        borderWidth: 0.25,
        boxShadow: "0px 1px 5px 0px rgba(102, 102, 102, 1)",
      }}
    >
      <Col xs={1} className="mt-2 mb-2">
        <h6>{index + 1}</h6>
      </Col>
      <Col xs={10} className="mt-2 mb-2">
        <div className="row">
          <Col xs={12}>
            <h5>{queueData.title}</h5>
          </Col>
        </div>
        <div className="row">
          <Col md={12}>
            <p>
              {`${queueData.city}, ${queueData.state}`}
              <br />
              {`${queueData.address}, ${queueData.zipCode}`}
            </p>
          </Col>
        </div>
        <div className="row">
          <Col sm={12}>
            <h6>Location Message</h6>
          </Col>
          <Col sm={12}>
            <textarea
              rows={4}
              style={{ width: "100%", resize: "none" }}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              defaultValue={message}
            ></textarea>
          </Col>
        </div>
        <div className="row" style={{ minHeight: "50px" }}>
          <Col sm={12}>
            <h6>
              Current Estimated Minutes: {queueData.estMinutes}{" "}
              <span style={{ color: "green" }}>
                {showUpdatedText ? "Updated!" : null}
              </span>
            </h6>
          </Col>
        </div>
        <div className="row mt-2 mb-2">
          <Col xs={4} className="updateBtnRow">
            <Button
              variant="success"
              onClick={() => {
                handleCountUpdate(24);
              }}
            >
              Update
            </Button>
          </Col>
          <Col xs={4} className="updateBtnRow">
            <Button
              variant="warning"
              onClick={() => {
                handleCountUpdate(39);
              }}
            >
              Update
            </Button>
          </Col>
          <Col xs={4} className="updateBtnRow">
            <Button
              variant="danger"
              onClick={() => {
                handleCountUpdate(40);
              }}
            >
              Update
            </Button>
          </Col>
        </div>
      </Col>
    </div>
  );
};

const QueueTable = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [queues, setQueues] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchStringTmp, setSearchStringTmp] = useState("");
  const [init, setInit] = useState(true);

  const getQueues = async () => {
    await setIsLoading(true);
    let { data: queueDataA } = await Axios.post(
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/nextup-ssnrm/service/getHarrisCountyQ/incoming_webhook/webhook0"
    );
    queueDataA = queueDataA.reduce((acc, cur) => {
      cur.estHours = cur.estHours["$numberLong"];
      cur.estMinutes = cur.estMinutes["$numberLong"];
      if (searchString && searchString.length > 1) {
        if (
          cur.title.toLowerCase().includes(searchString.toLocaleLowerCase())
        ) {
          acc.push(cur);
        }
      } else {
        acc.push(cur);
      }
      return acc;
    }, []);
    await setQueues(queueDataA);
    setIsLoading(false);
  };

  useEffect(() => {
    if (init === false) {
      getQueues();
    }
  }, [searchString]);

  useEffect(() => {
    setTimeout(() => {
      getQueues();
      setInit(false);
    }, 2000);
  }, []);

  return (
    <div className="container-fluid" id="queueTableContainer">
      <div className="row mb-5">
        <div className="col-sm-4">
          <div className="mt-3">
            <h3>Harris County</h3>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="mt-2" style={{ width: "100%" }}>
            <div className="row">
              <Col sm={6}>
                <input
                  type="text"
                  style={{ height: 50, width: "100%" }}
                  placeholder="Search Location Title"
                  value={searchStringTmp}
                  onChange={(e) => {
                    setSearchStringTmp(e.target.value);
                  }}
                />
              </Col>
              <Col sm={6} className="mt-1">
                <Button
                  onClick={() => {
                    setSearchString(searchStringTmp);
                  }}
                  style={{ backgroundColor: "#5dbecb" }}
                >
                  Search
                </Button>

                <Button
                  variant="default"
                  onClick={() => {
                    setSearchString("");
                    setSearchStringTmp("");
                  }}
                >
                  clear
                </Button>
              </Col>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FadeLoader css={override} size={50} color={"#5cbecb"} />
        </div>
      ) : (
        queues.map((q, idx) => <QueueRow key={idx} index={idx} data={q} />)
      )}
    </div>
  );
};

export { QueueTable };
