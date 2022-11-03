import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import LOCATIONS from "../components/Common/serviceArea";
import map from "../assets/images/locations/jjmap.png"

export const WhereToFind = () => {
  return (
    <div className="where">
      <Row className="where__introRow">
        <h1> WHERE TO FIND US</h1>
      </Row>
      <div className="where__mainDiv">
        <Container className="where__mainDiv__mainContainer">
          <Row>
            <h1 className="where__mainDiv__mainContainer__title">
              Proudly serving you on these locations!
            </h1>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col md={6}>
              {LOCATIONS.map((loc, i) => {
                if (i % 2 === 0) {
                  return (
                    <Row key={i} className="where__mainDiv__mainContainer__row">
                      <div className="where__mainDiv__mainContainer__row__div">
                        <Col xs={3}>
                          <ImLocation size={35} />
                        </Col>
                        <Col style={{ textAlign: "left" }}>
                          <h2>{loc}</h2>
                        </Col>
                      </div>
                    </Row>
                  );
                }
              })}
            </Col>
            <Col md={6}>
              {LOCATIONS.map((loc, i) => {
                if (i % 2 === 1) {
                  return (
                    <Row key={i} className="where__mainDiv__mainContainer__row">
                      <div className="where__mainDiv__mainContainer__row__div">
                        <Col xs={3}>
                          <ImLocation size={35} />
                        </Col>
                        <Col style={{ textAlign: "left" }}>
                          <h2>{loc}</h2>
                        </Col>
                      </div>
                    </Row>
                  );
                }
              })}
            </Col>
          </Row>
          <Row className="where__mainDiv__mainContainer__imgRow">
            <img src={map} className="where__mainDiv__mainContainer__imgRow__img"/>
          </Row>
        </Container>
      </div>
    </div>
  );
};
