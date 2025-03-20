import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css"; // We'll style it here
import { useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("location:", location);
  }, []);
  if (location.pathname === "/") {
    return null;
  }
  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm py-3" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="brand-text">
          MyPortfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="/experience" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link href="/portfolio" className="nav-link-custom">
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="https://faithnchifor.hashnode.dev/"
              className="nav-link-custom"
              target="_blank"
            >
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
