import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import JJMAP from "../../assets/images/locations/jjmap.png";
import LOCATIONS from "./serviceArea";

export const Location = () => {
  return (
    <div className="location">
      <Row>
        <Col md={6}>
          <Container className="location__locationlistContainer">
            {LOCATIONS.map((loc, i) => (
              <Row
                className="location__locationlistContainer__listItem"
                key={i}
              >
                <ImLocation
                  size={40}
                  className="location__locationlistContainer__svg"
                />
                <h1>
                  {loc}
                  {" SC"}
                </h1>
              </Row>
            ))}
          </Container>
        </Col>
        <Col md={6}>
          <Container className="location__imgContainer">
            <img src={JJMAP} className="location__imgContainer__img" />
          </Container>
        </Col>
      </Row>
    </div>
  );
};
