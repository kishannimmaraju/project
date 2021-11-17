import React from "react";
import { Col, Row, Container } from "react-bootstrap";

function Form() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="contact-info">CONTACT US</h2>
            <div className="contact-info">
              <h5>Location</h5>
              <p>H.NO.1-89/G/36,PLOT NO.36 SHILPI VALLEY,MADHAPUR,</p>
            </div>
            <div className="contact-info">
              <h5>Email</h5>
              <p>metrolabs@gmail.com</p>
            </div>
            <div className="contact-info">
              <h5>Call</h5>
              <p>9999999999999</p>
            </div>
          </Col>
          <Col>
            <Row>
              <div>
                <Col></Col>
                <Col></Col>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Form;
