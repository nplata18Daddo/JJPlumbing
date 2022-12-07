import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BsFillCalendarFill } from "react-icons/bs";
import { Helmet } from "react-helmet";
export const HomeBannerComponent = () => {
  return (
    <div className="home__container">
      <Row style={{ height: "100%", width: "100%", textAlign: "center" }}>
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
                  textShadow: "0.17rem 0.17rem 0.1rem #28438a",
                }}
              >
                Your Plumbing and Drain Cleaning Professionals
              </p>
            </Col>

            <Col xs={12}>
              <Helmet>
                <link
                  rel="stylesheet"
                  media="screen"
                  href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
                />
                <script
                  src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js"
                  clienthub_id="c97c1b1b-e69c-4439-9e74-53580fa9c441"
                  form_url="https://clienthub.getjobber.com/client_hubs/c97c1b1b-e69c-4439-9e74-53580fa9c440/public/work_request/embedded_dialog_work_request_form"
                ></script>
              </Helmet>{" "}
              <Button
                type="button"
                className="button__main-filled raise"
                id="work-request-button-c97c1b1b-e69c-4439-9e74-53580fa9c441"
              >
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
