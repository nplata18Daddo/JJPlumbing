import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
export const CameraService = () => {
  return (
    <div className="services__container" style={{ paddingTop: "2rem" }}>
      <Container>
        <Row>
          <Col xs={12} lg={8} className="my-auto">
            <p className={"serviceDetail__title"}>Camera Inspection</p>
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
              Our sewer inspection camera can identify nearly any problem with
              your sewer line, but these are some of the most common: Tree root
              infiltrations: These are most common with old pipes made out of
              clay, cast iron, or other porous materials. Tree roots seek out
              water sources as they grow, and if they find a crack in your sewer
              pipe, they’ll grow.
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
              Need Camera Inspection Services? Call Us!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
