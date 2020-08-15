import React from "react";

import "../style.css";
import appStoreImg from "../../../images/app-store.png";

const Section2 = () => {
  return (
    <div className="container-fluid" id="Section2Container">
      <div className="row padded">
        <div className="col-md-12" id="Section2TextContainer1">
          <h2 className="Section2Title">Become a Partner</h2>
          <h5 className="Section2Sub" id="Section2Sub1">
            We're in this together. We look to provide a family oriented
            relationship with each business
          </h5>
          <div className="appStoreContainer">
            <img alt="headerImage" src={appStoreImg} className="appStoreImg" />
          </div>
        </div>
        <div className="col-md-12 dividerLine"></div>
        <div className="col-md-12" id="Section2TextContainer2">
          <h2 className="Section2Title">Tour the City</h2>
          <h5 className="Section2Sub" id="Section2Sub2">
            Stay up to date with the status of live local business in Austin,
            Houston and Seattle.ß
          </h5>
          <div className="appStoreContainer">
            <img
              alt="headerImage"
              src={appStoreImg}
              id="aboutImage"
              className="appStoreImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Section2 };
