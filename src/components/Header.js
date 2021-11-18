import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="bg-dark" variant="dark">
        <Container>
          <Navbar.Brand className="nav-brand">Metro Labs</Navbar.Brand>
          <Nav>
            <Link to="/" className="nav_link activelink">
              Home
            </Link>
            <Link to="/about" className="nav_link">
              About
            </Link>
            <Link to="/services" className="nav_link">
              Services
            </Link>
            <Link to="/portfolio" className="nav_link">
              Portfolio
            </Link>
            <Link to="/pricing" className="nav_link">
              Pricing
            </Link>
            <Link to="team" className="nav_link">
              Team
            </Link>
            <Link to="/contact" className="nav_link">
              Contact
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
