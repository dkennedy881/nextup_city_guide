/* eslint-disable import/first */
import React, { Component, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Axios from "axios";

//comps
import { QueuePlot } from "../Components/QueuePlot";

import "../style.css";
import { useAsync } from "react-async";
const refs = {
  map: undefined,
};

const QueueMap = ({ queueItems }) => {
  const [queuePlotData, setQueuePlotData] = useState([]);
  const [showPlotTitles, setShowPlotTitles] = useState(false);
  const [mapZoom, setMapZoom] = useState(4.1);
  const [mapCenter] = useState({
    lat: 38.95,
    lng: -108.3,
  });

  const addQueueCoords = async (queueItems) => {
    const promises = [];
    queueItems.forEach((queueItem) => {
      const addressString = `${queueItem.address.replace(
        /\s+/g,
        "+"
      )},+${queueItem.city.replace(/\s+/g, "+")},+${queueItem.state.replace(
        /\s+/g,
        "+"
      )},+${queueItem.zipCode}`;
      promises.push(
        new Promise(async (res, rej) => {
          const data = await Axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${addressString}&key=AIzaSyDl4Fg7fPNuqn0fd2RV-LkXp7bLTuE0HxI`
          );
          queueItem.locationInfo = data.data.results[0];
          res(queueItem);
        })
      );
    });
    const promiseData = await Promise.all(promises);
    return promiseData;
  };

  const setPlotTitles = (zoom) => {
    if (zoom >= 9 && !showPlotTitles) {
      setShowPlotTitles(true);
    } else if (zoom < 9 && showPlotTitles) {
      setShowPlotTitles(false);
    }
    setTimeout(() => {
      setMapZoom(zoom + 0.002);
    }, 1000);
  };

  const updateQueueItems = async (queueItems) => {
    const queueItemsWCoors = await addQueueCoords(queueItems);
    await setQueuePlotData(queueItemsWCoors);
  };

  useEffect(() => {
    if (queueItems !== queuePlotData) updateQueueItems(queueItems);
  }, [queueItems]);

  useEffect(() => {}, [mapZoom]);

  return (
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
        options={{
          fullscreenControl: false,
          gestureHandling: "greedy",
          clickableIcons: false,
          zoomControl: false,
        }}
        defaultCenter={mapCenter}
        zoom={mapZoom}
        onChange={({ center, zoom, bounds, marginBounds }) => {
          setPlotTitles(zoom, center);
        }}
      >
        {queuePlotData.length ? (
          queuePlotData.map((queueItem) => {
            return (
              <QueuePlot
                key={queueItem.id["$numberLong"]}
                lat={queueItem.locationInfo.geometry.location.lat}
                lng={queueItem.locationInfo.geometry.location.lng}
                data={queueItem}
                showPlotTitles={showPlotTitles}
              />
            );
          })
        ) : (
          <></>
        )}
      </GoogleMapReact>
    </div>
  );
};

export { QueueMap };
