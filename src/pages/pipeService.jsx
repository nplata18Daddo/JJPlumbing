import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
export const PipeService = () => {
  return (
    <div className="services__container" style={{ paddingTop: "2rem" }}>
      <Container>
        <Row>
          <Col xs={12} lg={8} className="my-auto">
            <p className={"serviceDetail__title"}>Pipe Descaling</p>
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
              Pipe descaling entails the use of water pressure or chemical
              cleaners to remove hardened detritus and debris from sewer and
              drain pipes. This technique will restore the normal flow of water
              throughout your home or business, and allow your plumbing systems
              to drain properly. Pipe descaling services typically utilize a
              hose, inserted into the scaled pipe, that blasts away the scales
              with high water pressure or suction. The scales will then need to
              be removed, so they do not collect and form another blockage. In
              the event that your home or business requires pipe descaling,
              consider contacting us.
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
                  src="/images/pipe1.jpeg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/pipe2.jpeg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/pipe3.jpeg"
                  alt="Third slide"
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
            <p className={"serviceDetail__title__right"}> Patching</p>
          </Col>
          <Row>
            <Col
              xs={12}
              lg={4}
              className="my-auto"
              style={{
                textAlign: "center",
                justifyContent: "center",
                paddingTop: "1rem",
              }}
            >
              <img
                style={{
                  width: "60%",
                  borderRadius: "30px",
                }}
                src="/images/patching.jpeg"
              ></img>
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
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "300",
                  textAlign: "justify",
                  paddingTop: "2rem",
                }}
              >
                Pipe patching / Re Lining is a service that can repair certain
                types of damaged underground pipe work without having to carry
                out excavations. This means of repair is fast, efficient and
                requires no damage to the surface. Access to the pipe is through
                the local manholes.
              </p>
            </Col>
          </Row>
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
              Need Pipe Descaling and Patching Services? Call Us!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
