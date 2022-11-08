import React from "react";
import { Container, Row } from "react-bootstrap";
import { HomeBannerComponent } from "../components/Common/homeBannerComponent";
import { Location } from "../components/Common/location";
import { ServiceComponent } from "../components/Common/serviceComponent";
import { WhyUs } from "../components/Common/whyus";

export const Home = () => {
  return (
    <>
      <HomeBannerComponent />
      <div style={{ backgroundColor: "#EFB45B" }}>
        <div
          className="services__container"
          style={{ borderRadius: "0px 0px 0px 127px" }}
        >
          <Container>
            <Row>
              <ServiceComponent
                link="/services/plumbing"
                img="plumbing.png"
                color="secondary"
                title="Plumbing"
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </Row>
            <Row className="justify-content-end">
              <ServiceComponent
                link="/services/draingCleaning"
                img="drainCleaning.png"
                color="main"
                title="Drain Cleaning"
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </Row>
            <Row>
              <ServiceComponent
                link="/services/pipeDescaling"
                color="secondary"
                img="pipeDescaling.png"
                title="Pipe Descaling and Patching"
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </Row>
            <Row className="justify-content-end">
              <ServiceComponent
                link="/services/cameraInspection"
                img="cameraInspection.png"
                color="main"
                title="Camera Inspection"
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </Row>
          </Container>
        </div>
      </div>

      <WhyUs />
      <Location />
    </>
  );
};
