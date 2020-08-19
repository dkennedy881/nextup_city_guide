import React from "react";

import "../style.css";

import { BarChartGraphic } from "./BarChartGraphic";

const Greeting = () => {
  return (
    <div className="container-fluid" id="GreetingContainer">
      <div className="row padded">
        <div className="col-md-7" id="GreetingTextContainer">
          <h2 id="GreetingTitle">
            Become a Partner or <br /> Tour the City
          </h2>
          <h4 id="GreetingSubTitle">City Guide</h4>
        </div>
        <div className="col-md-5" id="GraphContainer">
          <BarChartGraphic />
        </div>
      </div>
    </div>
  );
};

export { Greeting };
