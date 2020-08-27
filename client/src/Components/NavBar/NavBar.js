import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";

import iconImg from "../../images/icon.jpeg";
import logoImg from "../../images/next-up.png";
const NavBar = () => {
  return (
    <Navbar
      style={{ height: "60px" }}
      bg="dark"
      variant="light"
      expand="lg"
      fixed={"top"}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <div className="navFlex">
          <img alt="headerImage" src={iconImg} id="navIconImg" />
        </div>
        <img alt="headerImage" src={logoImg} id="navLogoImg" />
        <div className="navFlex" />
      </div>

      {/* 
      //TODO add toggle drop down
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Privacy Policy</Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
      {/* </div> */}
    </Navbar>
  );
};

export { NavBar };
