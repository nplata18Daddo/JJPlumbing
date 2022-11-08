import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container
      style={{
        textAlign: "center",
        minHeight: "57vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="container__responsive"
    >
      <Row>
        <Col xs={12}>
          <p style={{ fontSize: "140px", color: "#28438A", fontWeight: "700" }}>
            404
          </p>
        </Col>
        <Col xs={12}>
          <p style={{ fontSize: "50px" }}>Page Not Found</p>
        </Col>
        <Col xs={12} style={{ paddingTop: "1rem" }}>
          {" "}
          <Link to="/">
            <Button className="button__main-filled raise">Go Back</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
