import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
export const DrainCleaningService = () => {
  return (
    <div className="services__container" style={{ paddingTop: "2rem" }}>
      <Container>
        <Row>
          <Col xs={12} lg={8} className="my-auto">
            <p className={"serviceDetail__title"}>Drain Cleaning</p>
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
            style={{
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                fontWeight: "300",
                textAlign: "justify",
              }}
            >
              JJ Plumbing And Drain Services professionals are available 24/7 to
              perform routine drain maintenance, emergency drain cleaning, sewer
              cleaning.
            </p>
          </Col>
          <Col
            xs={12}
            lg={4}
            className="my-auto"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <img
              style={{
                width: "60%",
                borderRadius: "30px",
              }}
              src={`/images/plumbingPicture.png`}
            ></img>
          </Col>
        </Row>

        <Row
          className="justify-content-end my-auto"
          style={{ paddingTop: "2rem" }}
        >
          <Col xs={12} lg={8} className="my-auto">
            <p className={"serviceDetail__title__right"}>
              Drain Cleaning Services
            </p>
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
              <li>Floor drains</li>
              <li>Downspout drains</li>
              <li>Storm drains</li>
              <li>Sewer drains</li>
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
              Need Drain Cleaning Services? Call Us!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
