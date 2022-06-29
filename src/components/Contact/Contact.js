import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Home() {
  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <Particle />
        <Container className="contact-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi there.<br /> Here is the contact form: 
              </h1>
            </Col>
            y
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
