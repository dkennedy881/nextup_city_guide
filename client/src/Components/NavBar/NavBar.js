import React from "react";
import "./style.css";
import "../../App.css";
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
                  location.pathname !== "/about" &&
                  location.pathname !== "/privacypolicy"
                    ? "underline"
                    : "none",
                color: "#5dbecb",
                fontWeight: "900",
                margin: " 5px 20px",
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
                color: "#5dbecb",
                fontWeight: "900",
                margin: " 5px 20px",
              }}
              onClick={() => {
                document.querySelector(".navbar-toggler").click();
              }}
            >
              About
            </Link>
            <Link
              to="/privacypolicy"
              style={{
                textDecoration:
                  location.pathname === "/privacypolicy" ? "underline" : "none",
                color: "#5dbecb",
                fontWeight: "900",
                margin: " 5px 20px",
              }}
              onClick={() => {
                document.querySelector(".navbar-toggler").click();
              }}
            >
              Privacy Policy
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
            className="navLinkWBoarder"
          >
            About
          </Link>
          <Link
            to="/privacypolicy"
            onClick={() => {
              document.querySelector(".navbar-toggler").click();
            }}
          >
            Privacy Policy
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { NavBar };
