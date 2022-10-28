import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/whyUs/jjlogo.png";
export const WhyUs = () => {
  return (
    <div className="whyUs">
      <Row>
        <Col md={6}>
          <Container className="whyUs__logoContainer">
            <div className="whyUs__logoContainer__square">
              <h1>Why Us</h1>
              <img src={logo} className="whyUs__logoContainer__logo"/>
            </div>
          </Container>
        </Col>
        <Col md={6}>
          <Container className="whyUs__infoContainer">
            <Row className="whyUs__infoContainer__listItem">
              <h1>Always on Time</h1>
            </Row>
            <Row className="whyUs__infoContainer__listItem">
              <h1>24/7 Service</h1>
            </Row>
            <Row className="whyUs__infoContainer__listItem">
              <h1>Licensed and Insured</h1>
            </Row>
            <Row className="whyUs__infoContainer__listItem">
              <h1>Bilingual Support</h1>
            </Row>
            <Row className="whyUs__infoContainer__listItem">
              <h1>Great Prices</h1>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
};
