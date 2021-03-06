import React from "react";

import "../style.css";

import { BarChartGraphic } from "./BarChartGraphic";

const Greeting = () => {
  return (
    <div className="container-fluid" id="GreetingContainer">
      <div className="row padded" id="GreetingRow">
        <div className="col-lg-7" id="GreetingTextContainer">
          <h2 id="GreetingTitle">
            A Better
            <br />
            Voter Experience
            <br />
            Starts Here
          </h2>
          <h4 id="GreetingSubTitle">City Guide for Voters</h4>
        </div>
        <div className="col-lg-5" id="GraphContainer">
          <BarChartGraphic />
        </div>
      </div>
    </div>
  );
};

export { Greeting };
