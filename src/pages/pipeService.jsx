import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
export const PipeService = () => {
  return (
    <div className="services__container" style={{ paddingTop: "2rem" }}>
      <Container>
        <Row>
          <Col xs={12} lg={8} className="my-auto">
            <p className={"serviceDetail__title"}>
              Pipe Descaling and Patching
            </p>
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
                fontSize: "28px",
                fontWeight: "300",
                textAlign: "justify",
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
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
              {" "}
              Pipe Descaling and Patching Services
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
                fontSize: "28px",
                fontWeight: "300",
                textAlign: "justify",
              }}
            >
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </Col>
        </Row>

        <Row style={{ paddingTop: "3rem" }}>
          <Col xs={12}>
            <p
              style={{
                fontSize: "40px",
                fontWeight: "700",
                textAlign: "center",
                color: "white",
                backgroundColor: "#88d7f8",
                borderRadius: "25px",
              }}
            >
              Need Pipe Descaling and Patching Services? Call Us!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
