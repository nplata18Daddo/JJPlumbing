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
                text="Homeowners trust JJ Plumbing And Drain Services for all of their install repair and replacement needs including: sewer drain, faucet, sink, toilet, shower & tubs, waterlines, pipework, disposers, dishwashers, water heater and more."
              />
            </Row>
            <Row className="justify-content-end">
              <ServiceComponent
                link="/services/draingCleaning"
                img="drainCleaning.png"
                color="main"
                title="Drain Cleaning"
                text="JJ Plumbing And Drain Services professionals are available 24/7 to perform routine drain maintenance, emergency drain cleaning, sewer cleaning. Our drain cleaning services include floor drains, downspout drains, storm drains sewer drains and more."
              />
            </Row>
            <Row>
              <ServiceComponent
                link="/services/pipeDescaling"
                color="secondary"
                img="pipeDescaling.png"
                title="Pipe Descaling and Patching"
                text="Pipe descaling entails the use of water pressure or chemical cleaners to remove hardened detritus and debris from sewer and drain pipes. This technique will restore the normal flow of water throughout your home or business, and allow your plumbing systems to drain properly. Pipe patching / Re Lining is a service that can repair certain types of damaged underground pipe work without having to carry out excavations."
              />
            </Row>
            <Row className="justify-content-end">
              <ServiceComponent
                link="/services/cameraInspection"
                img="cameraInspection.png"
                color="main"
                title="Camera Inspection"
                text="Our sewer inspection camera can identify nearly any problem with your sewer line, but these are some of the most common: Tree root infiltrations: These are most common with old pipes made out of clay, cast iron, or other porous materials. "
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
