import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
function ContactForm() {
  return (
    <>
      <div className="formsection-bg">
        <Container>
          <Row className="formsection-inner">
            <Col>
              <div>
                <h3>Location:</h3>
                <p>
                  H.NO.1-89/G/36,PLOT NO.36 SHILPI VALLEY,MADHAPUR, Hyderabad
                </p>
              </div>
              <div>
                <h3>Email:</h3>
                <p>info@metrolabsservices.com</p>
              </div>
              <div>
                <h3>Call:</h3>
                <p>+91-9951222468</p>
              </div>
            </Col>
            <Col>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Control type="text" placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Last name" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Control type="text" placeholder="Email" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Phone" />
                  </Col>
                </Row>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  className="mb-3"
                ></Form.Control>
                <Form.Control
                  as="textarea"
                  placeholder="Type your message here"
                  rows={3}
                  className="mb-4"
                />
                <div className="text-center">
                  <Button variant="primary">Submit</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactForm;
