import React from "react";

import "../style.css";

const Section1 = () => {
  return (
    <div className="container-fluid Section" id="Section1Container">
      <div className="row padded">
        <div className="col-md-12" id="Section1TextContainer">
          <h2 id="Section1Title">"Great For...</h2>
          <h5 id="Section1Sub">
            food trucks, mobile barbers, farmers market vendor, street fair
            vendor, restaurant/food pop up, nonprofit food/supplies
            distribution."
          </h5>
        </div>
      </div>
    </div>
  );
};

export { Section1 };
