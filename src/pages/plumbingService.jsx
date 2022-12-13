import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
export const PlumbingService = () => {
  return (
    <div className="services__container" style={{ paddingTop: "2rem" }}>
      <Container>
        <Row>
          <Col xs={12} lg={8} className="my-auto">
            <p className={"serviceDetail__title"}>Plumbing</p>
          </Col>
          <Col
            xs={12}
            lg={4}
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <img
              style={{
                width: "60%",
              }}
              src={`/images/24hours.png`}
            ></img>
          </Col>
        </Row>

        <Row style={{ paddingTop: "3rem" }}>
          <Col
            xs={12}
            lg={8}
            className="my-auto"
            style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
          >
            <p
              style={{
                fontSize: "24px",
                fontWeight: "300",
                textAlign: "justify",
              }}
            >
              Homeowners trust JJ Plumbing And Drain Services for all of their
              install repair and replacement needs including: sewer drain,
              faucet, sink, toilet, shower & tubs, waterlines, pipework,
              disposers, dishwashers, water heater and more.
            </p>
          </Col>
          <Col
            xs={12}
            lg={4}
            className="my-auto"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/plumbing1.jpeg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/plumbing2.jpeg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/plumbing3.jpeg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/plumbing4.jpeg"
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row
          className="justify-content-end my-auto"
          style={{ paddingTop: "2rem" }}
        >
          <Col xs={12} lg={8} className="my-auto">
            <p className={"serviceDetail__title__right"}>Plumbing Services</p>
          </Col>
          <Col
            xs={12}
            lg={8}
            className="my-auto"
            style={{
              paddingLeft: "2rem",
              paddingRight: "2rem",
              textAlign: "right",
            }}
          >
            <ul
              style={{
                fontSize: "24px",
                fontWeight: "300",
                textAlign: "justify",
              }}
            >
              <li>Sewer Drain</li>
              <li>Waterlines</li>
              <li>Shower tubs</li>
              <li>Water heaters</li>
              <li>Sinks</li>
              <li>And more!</li>
            </ul>
          </Col>
        </Row>

        <Row style={{ paddingTop: "3rem" }}>
          <Col xs={12}>
            <p
              style={{
                fontSize: "28px",
                fontWeight: "700",
                textAlign: "center",
                color: "white",
                backgroundColor: "#88d7f8",
                borderRadius: "25px",
              }}
            >
              Need Plumbing Services? Call Us!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
