import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import JJMAP from "../../assets/images/locations/jjmap.png";

export const Location = () => {
  return (
    <div className="location">
      <Row>
        <Col md={6}>
          <Container className="location__locationlistContainer">
            {/* Pickens SC
Cherokee
Union
Laurens
Greenwood
Newberry
Chester
*/}
            <Row className="location__locationlistContainer__listItem">
              <ImLocation
                size={40}
                className="location__locationlistContainer__svg"
              />
              <h1>Greenville SC</h1>
            </Row>
            <Row className="location__locationlistContainer__listItem">
              <ImLocation
                size={40}
                className="location__locationlistContainer__svg"
              />
              <h1>Spartanburg SC</h1>
            </Row>
            <Row className="location__locationlistContainer__listItem">
              <ImLocation
                size={40}
                className="location__locationlistContainer__svg"
              />
              <h1>Anderson SC</h1>
            </Row>
            <Row className="location__locationlistContainer__listItem">
              <ImLocation
                size={40}
                className="location__locationlistContainer__svg"
              />
              <h1>Pickens SC</h1>
            </Row>
            <Row className="location__locationlistContainer__listItem">
              <ImLocation
                size={40}
                className="location__locationlistContainer__svg"
              />
              <h1>Cherokee SC</h1>
            </Row>
            <Row className="location__locationlistContainer__listItem">
              <ImLocation
                size={40}
                className="location__locationlistContainer__svg"
              />
              <h1>Union SC</h1>
            </Row>
            <Row className="location__locationlistContainer__listItem">
              <ImLocation
                size={40}
                className="location__locationlistContainer__svg"
              />
              <h1>Laurens SC</h1>
            </Row>
          </Container>
        </Col>
        <Col md={6}>
          <Container className="location__imgContainer">
                <img src={JJMAP} className="location__imgContainer__img"/>
          </Container>
        </Col>
      </Row>
    </div>
  );
};
