import React, { useEffect } from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import iconImg from "../../images/icon.jpeg";
import logoImg from "../../images/next-up.png";
const NavBar = ({}) => {
  const location = useLocation();

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
        <div
          className="navFlex"
          style={{ display: "flex", flexDirection: "row-reverse" }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav id="basic-navbar-nav-hide">
            <Link
              to="/"
              style={{
                textDecoration:
                  location.pathname !== "/about" ? "underline" : "none",
              }}
              onClick={() => {
                document.querySelector(".navbar-toggler").click();
              }}
              className="navLinkWBoarder"
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration:
                  location.pathname === "/about" ? "underline" : "none",
              }}
              onClick={() => {
                document.querySelector(".navbar-toggler").click();
              }}
            >
              About
            </Link>
          </Nav>
        </div>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link
            to="/"
            onClick={() => {
              document.querySelector(".navbar-toggler").click();
            }}
            className="navLinkWBoarder"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              document.querySelector(".navbar-toggler").click();
            }}
          >
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { NavBar };
