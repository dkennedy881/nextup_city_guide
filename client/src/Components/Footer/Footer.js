import React from "react";
import "./style.css";
import iconImg from "../../images/icon.jpeg";
const Footer = () => {
  return (
    <div className="container-fluid" id="footerContainer">
      <div className="row padded">
        <div className="col-sm-12">
          <h6 id="footerText">
            © 2020 Well-Travelled Explorations, LLC | privacy policy | private
            policy
          </h6>
        </div>
        <div className="col-sm-12">
          <div id="footerIconContainer">
            <img alt="headerImage" src={iconImg} id="footerIconImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
