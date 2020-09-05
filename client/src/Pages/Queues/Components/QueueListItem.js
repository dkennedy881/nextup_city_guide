import React from "react";

import "../style.css";

const QueueListItem = ({ queueItem }) => {
  const getOpen = () => {
    switch (new Date().getDay()) {
      case 1:
        if (queueItem.monday.active) {
          return queueItem.monday.open + " - ";
        } else {
          return "Closed";
        }
      case 2:
        if (queueItem.tuesday.active) {
          return queueItem.tuesday.open + " - ";
        } else {
          return "Closed";
        }
      case 3:
        if (queueItem.wednesday.active) {
          return queueItem.wednesday.open + " - ";
        } else {
          return "Closed";
        }
      case 4:
        if (queueItem.thursday.active) {
          return queueItem.thursday.open + " - ";
        } else {
          return "Closed";
        }
      case 5:
        if (queueItem.friday.active) {
          return queueItem.friday.open + " - ";
        } else {
          return "Closed";
        }
      case 6:
        if (queueItem.saturday.active) {
          return queueItem.saturday.open + " - ";
        } else {
          return "Closed";
        }
      default:
        if (queueItem.sunday.active) {
          return queueItem.sunday.open + " - ";
        } else {
          return "Closed";
        }
    }
  };
  const getClose = () => {
    switch (new Date().getDay()) {
      case 1:
        if (queueItem.monday.active) {
          return queueItem.monday.close;
        } else {
          return "";
        }
      case 2:
        if (queueItem.tuesday.active) {
          return queueItem.tuesday.close;
        } else {
          return "";
        }
      case 3:
        if (queueItem.wednesday.active) {
          return queueItem.wednesday.close;
        } else {
          return "";
        }
      case 4:
        if (queueItem.thursday.active) {
          return queueItem.thursday.close;
        } else {
          return "";
        }
      case 5:
        if (queueItem.friday.active) {
          return queueItem.friday.close;
        } else {
          return "";
        }
      case 6:
        if (queueItem.saturday.active) {
          return queueItem.saturday.close;
        } else {
          return "";
        }
      default:
        if (queueItem.sunday.active) {
          return queueItem.sunday.close;
        } else {
          return "";
        }
    }
  };
  return (
    <div className="queueListItem">
      <div className="queueListItemTitleContainer">
        <span className="queueListItemTitle">{queueItem.title}</span>
      </div>
      <div className="queueListItemMeta">
        <div className="queueListItemMetaLeft">
          <p className="queueListItemMessage">{queueItem.message}</p>
          <div className="queueListItemAddressContainer">
            <span>{`${queueItem.address}, ${queueItem.zipCode}`}</span>
            <br />
            <span>{`${queueItem.city}, ${queueItem.state}`}</span>
          </div>
          <span className="queueListItemOOO">
            {queueItem.active === true && getOpen() !== "Closed"
              ? `${getOpen()} - ${getClose()}`
              : "Clsoed"}
          </span>
        </div>
        <div className="queueListItemMetaRight">
          <div className="queueListItemCountContaier">
            <span className="queueListItemCount">
              {queueItem.count["$numberLong"]}
            </span>
            <p className="queueListItemCountInLine">In Line</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { QueueListItem };
