import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import logoNavBar from "../assets/images/jjnavbarOptions.png";
import img2 from "../assets/images/image18.png";
import img3 from "../assets/images/image17.png";



export const AboutUs = () => {
  return (
    <div>

      <div className="about">
        <Row className="about__row">

          <Col xs={2} className="about__left">
          </Col>

          <Col className="about__barraAzul" xs={12} md={8}>
            <Row className="about__barraAzul__about pt-4">About JJ Plumbing</Row>
            <Row className="about__barraAzul__your">Your plumbing needs best done</Row>
          </Col>

          <Col xs={2} className="about__right">

          </Col>
        </Row>

      </div>


      <div className="history">
        <img className="circle" style={{}} alt="" src={logoNavBar}></img>
        <Row className="history__tittle">Our History</Row>
        <Container className="history__info">
          Knowing who to call when plumbing problems strike your home or business is
          not always easy. Our staff and technicians seek to make this decision
          easier by offering the most effective and comprehensive plumbing solutions
          in our area of operation. Our employees with work with you and for you to
          ensure complete satisfaction with your choice of services.
        </Container>




        <Row style={{ height: "fit-content", justifyContent: "center" }}>
          <Col
           
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <Carousel style={{
              width: "60vw", hieight: "100px"
            }}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/banner3.jpg"
                  alt="Third slide"
                  style={{
                    height: "50vh", aspectRatio: "9/16"
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/homeBanner.jpg"
                  alt="Third slide"
                  style={{
                    height: "50vh", aspectRatio: "9/16"
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/banner2.jpg"
                  alt="Third slide"
                  style={{
                    height: "50vh", aspectRatio: "9/16"
                  }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            a
          </Col>
          <Col xs={4}>
            a
          </Col>
          <Col xs={4}>
            a
          </Col>
        </Row>



      </div>
    </div>


  );
};
