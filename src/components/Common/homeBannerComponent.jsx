import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BsFillCalendarFill } from "react-icons/bs";
export const HomeBannerComponent = () => {
  return (
    <div className="home__container">
      <Row style={{ height: "100%", textAlign: "center" }}>
        <Col
          xs={12}
          lg={6}
          style={{ display: "flex", alignItems: "end", padding: "2rem" }}
        >
          <Row>
            <Col xs={12} style={{ paddingBottom: "3rem" }}>
              <p
                style={{
                  fontSize: "50px",
                  color: " #FFFFFF",
                  fontWeight: "700",
                }}
              >
                Your Plumbing and Drain Cleaning Professionals
              </p>
            </Col>

            <Col xs={12}>
              {" "}
              <Button className="button__main-filled">
                REQUEST SERVICE
                <BsFillCalendarFill
                  style={{ marginLeft: "12px", marginBottom: "8px" }}
                />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
