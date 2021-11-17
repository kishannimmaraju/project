import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar className="bg-dark" variant="dark">
        <Container>
          <Navbar.Brand className="nav-brand">Metro Labs</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" className="nav_link activelink">
              Home
            </Nav.Link>
            <Nav.Link href="#home" className="nav_link">
              About
            </Nav.Link>
            <Nav.Link href="#home" className="nav_link">
              Services
            </Nav.Link>
            <Nav.Link href="#home" className="nav_link">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#home" className="nav_link">
              Pricing
            </Nav.Link>
            <Nav.Link href="#home" className="nav_link">
              Team
            </Nav.Link>
            <Nav.Link href="#home" className="nav_link">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
