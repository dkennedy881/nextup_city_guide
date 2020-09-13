import React from "react";

import "../style.css";

import iconImg from "../../../images/icon.jpeg";

const Section4 = () => {
  return (
    <div className="container-fluid Section" id="Section1Container">
      <div className="row padded">
        <div className="col-md-12" id="Section1TextContainer">
          <h2 id="Section1Title" style={{ textAlign: "center" }}>
            How Next Up Makes the Voter Experience Better
          </h2>
          <div className="Section1SubNContainer">
            <h5 className="Section1SubN">
              1. We give voters visibility to estimated wait times and number of
              people in line at polling locations before arriving.
            </h5>
          </div>
          <div className="Section1SubNContainer">
            <h5 className="Section1SubN">
              2. We show voters polling locations that have estimated wait times
              over 30 minutes.
            </h5>
          </div>
          <div className="Section1SubNContainer">
            <h5 className="Section1SubN">
              3. We give voters useful information about polling location
              conditions to make a personal calculation about when its best to
              go vote (ex: when there are the fewest people in line, lowest wait
              time and least risk of financial loss).
            </h5>
          </div>
          <div className="Section1SubNContainer">
            <h5 className="Section1SubN">
              4. After the election, we will advocate for voters by using the
              app’s data in efforts to eliminate racial disparities in wait time
              at polling locations and create a national standard for voter
              experience.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Section4 };
