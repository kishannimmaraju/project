import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
function Footer() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <h3>Metro Labs</h3>
            <p>
              <b>Phone:</b>+91-9951222468
            </p>
            <p>
              <b>Email:</b>info@metrolabsservices.com
            </p>
          </Col>
          <Col>
            <h5>Useful Links</h5>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#home">portfolio</Nav.Link>
            {/* <Nav.Link href="#home">Pricing</Nav.Link>
            <Nav.Link href="#home">Team</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link> */}
          </Col>
          <Col>
            <h5>Our Services</h5>
            <Nav.Link href="#home">Web Design</Nav.Link>
            <Nav.Link href="#home">Web Development</Nav.Link>
            <Nav.Link href="#home">Product Management</Nav.Link>
            <Nav.Link href="#home">Marketing</Nav.Link>
            <Nav.Link href="#home">Graphic Design</Nav.Link>
          </Col>
          <Col>
            <h5>Our Social NetWorks</h5>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
