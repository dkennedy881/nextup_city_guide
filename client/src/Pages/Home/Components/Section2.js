import React from "react";

import "../style.css";
import appStoreImg from "../../../images/app-store.png";

const Section2 = () => {
  return (
    <div className="container-fluid" id="Section2Container">
      <div className="row padded">
        <div className="col-md-12" id="Section2TextContainer1">
          <h2 className="Section2Title">What Better Looks Like</h2>
          <h5 className="Section2Sub" id="Section2Sub1">
            <span className="Section2SubLit">30</span>
            <br /> Minutes maximum wait time for each voter
          </h5>
          <h5 className="Section2Sub" id="Section2Sub1">
            <span className="Section2SubLit">100%</span>
            <br /> Of registered voters in the United States can check estimated
            wait time and number of people in line before arriving at a polling
            location
          </h5>
          <h5 className="Section2Sub" id="Section2Sub1">
            <span className="Section2SubLit">0</span>
            <br /> Voters deterred from voting due to wait time at polling
            locations
          </h5>
          {/* <div className="appStoreContainer">
            <img alt="headerImage" src={appStoreImg} className="appStoreImg" />
          </div> */}
        </div>
        <div className="col-md-12 dividerLine"></div>
        <div className="col-md-12" id="Section2TextContainer2">
          <h2 className="Section2Title">What Is Actually Happening</h2>
          <h5 className="Section2Sub" id="Section2Sub1">
            <span className="Section2SubLit">~3</span>
            <br /> Million voters waited 30 minutes or more to cast their ballot
            during 2018 midterm election
          </h5>
          <h5 className="Section2Sub" id="Section2Sub1">
            <span className="Section2SubLit">~6</span>
            <br /> Hours wait time reported at Texas Southern University polling
            location in Houston’s Third Ward neighborhood during March 2020
            Texas primary election
          </h5>
          <h5 className="Section2Sub" id="Section2Sub1">
            <span className="Section2SubLit">~5</span>
            <br /> Hours wait time reported at polling location in Atlanta’s Old
            Fourth Ward neighborhood during June 2020 Georgia primary election
          </h5>
          <h5 className="Section2Sub" id="Section2Sub1">
            <span className="Section2SubLit">~98%</span>
            <br /> Of registered voters in the United States cannot check
            estimated wait time and number of people in line before arriving at
            a polling location
          </h5>
          <h5 className="Section2Sub" id="Section2Sub1">
            <span className="Section2SubLit">~730,000</span>
            <br />
            Voters deterred from voting due to wait time at polling locations
            during November 2012 presidential election - averaging around 14,000
            voters deterred per state
          </h5>
          {/* <div className="appStoreContainer">
            <img
              alt="headerImage"
              src={appStoreImg}
              id="aboutImage"
              className="appStoreImg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export { Section2 };
