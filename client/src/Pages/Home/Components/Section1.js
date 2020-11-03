import React from "react";

import "../style.css";

import iconImg from "../../../images/icon.jpeg";
import step1 from "../../../images/step1.png";
import step2 from "../../../images/step2.png";
import step3 from "../../../images/step3.png";

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
                src={step2}
                style={{
                  position: "relative",
                  top: "5px",
                }}
                className="demoImages"
              />
            </div>
          </div>
          <div className="">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt="headerImage"
                src={step1}
                style={{
                  position: "relative",
                  top: "5px",
                }}
                className="demoImages"
              />
            </div>
          </div>
          <div className="">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt="headerImage"
                src={step3}
                style={{
                  position: "relative",
                  top: "5px",
                }}
                className="demoImages"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Section1 };
