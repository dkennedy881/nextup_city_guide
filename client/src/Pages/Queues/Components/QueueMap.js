/* eslint-disable import/first */
import React, { Component, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Axios from "axios";

//comps
import { QueuePlot } from "../Components/QueuePlot";

import "../style.css";
const refs = {
  map: undefined,
};

class QueueMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queueItems: [],
      showPlotTitles: false,
    };
  }

  addQueueCoords = async (queueItems) => {
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

  setPlotTitles = (zoom) => {
    if (zoom >= 9 && !this.state.showPlotTitles) {
      this.setState({
        ...this.state,
        showPlotTitles: true,
      });
    } else if (zoom < 9 && this.state.showPlotTitles) {
      this.setState({
        ...this.state,
        showPlotTitles: false,
      });
    }
    console.log(zoom);
    console.log(this.state.showPlotTitles);
  };

  async componentWillReceiveProps(newProps) {
    if (newProps.queueItems !== this.props.queueItems) {
      let { queueItems } = newProps;
      queueItems = await this.addQueueCoords(queueItems);
      this.setState({ ...this.state, queueItems });
    }
  }
  render() {
    const { queueItems, showPlotTitles } = this.state;
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
            zoom_changed: () => {},
            gestureHandling: "greedy",
            clickableIcons: false,
          }}
          defaultCenter={{
            lat: 38.95,
            lng: -108.3,
          }}
          defaultZoom={4.1}
          zoom={4.1}
          onChange={({ center, zoom, bounds, marginBounds }) => {
            this.setPlotTitles(zoom);
          }}
        >
          {queueItems.map((queueItem) => {
            return (
              <QueuePlot
                key={queueItem.id["$numberLong"]}
                lat={queueItem.locationInfo.geometry.location.lat}
                lng={queueItem.locationInfo.geometry.location.lng}
                data={queueItem}
                showPlotTitles={showPlotTitles}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export { QueueMap };
