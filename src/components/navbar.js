import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css"; // We'll style it here
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();

  if (location.pathname.length > 1)
    return (
      <Navbar expand="lg" className="custom-navbar shadow-sm py-3" fixed="top">
        <Container>
          <Navbar.Brand to="/" className="brand-text">
            Faith N.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link to="/" className="nav-link-custom text-decoration-none">
                Home
              </Link>
              <Link
                to="/about"
                className="nav-link-custom text-decoration-none"
              >
                About
              </Link>
              <Link
                to="/experience"
                className="nav-link-custom text-decoration-none"
              >
                Experience
              </Link>
              <Link
                to="/my-portfolio"
                className="nav-link-custom text-decoration-none"
              >
                Portfolio
              </Link>
              <Link
                to="https://faithnchifor.hashnode.dev/"
                className="nav-link-custom  text-decoration-none"
                target="_blank"
              >
                Blog
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default CustomNavbar;
