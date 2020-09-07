import React from "react";

import "../style.css";

import iconImg from "../../../images/icon.jpeg";

const Section1 = () => {
  return (
    <div className="container-fluid Section" id="Section1Container">
      <div className="row padded">
        <div className="col-md-12" id="Section1TextContainer">
          <h2 id="Section1Title" style={{ textAlign: "center" }}>
            3 Easy Steps:
          </h2>
          <div className="">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt="headerImage"
                src={iconImg}
                style={{
                  height: "150px",
                  width: "150px",
                  position: "relative",
                  top: "5px",
                }}
              />
            </div>
            <h5 className="Section1Sub">
              Download the app on the Apple App Store.
            </h5>
          </div>
          <div className="">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt="headerImage"
                src={iconImg}
                style={{
                  height: "150px",
                  width: "150px",
                  position: "relative",
                  top: "5px",
                }}
              />
            </div>
            <h5 className="Section1Sub">Select your city</h5>
          </div>
          <div className="">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt="headerImage"
                src={iconImg}
                style={{
                  height: "150px",
                  width: "150px",
                  position: "relative",
                  top: "5px",
                }}
              />
            </div>
            <h5 className="Section1Sub">
              View polling stations and wait times
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Section1 };
