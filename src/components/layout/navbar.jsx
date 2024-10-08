import React, { useState, useTransition, useEffect, useNavigate } from "react";
import { Row, Col, Collapse, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import logoNavBar from "../../assets/images/jjnavbarOptions.png";
import { Helmet } from "react-helmet";
export const Navbar = () => {
  const [allowScroll, setAllowScroll] = useState(0);
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(true);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    let yScroll = window.scrollY;
    if (yScroll > 500) {
      setUp(false);
    } else if (yScroll <= 300) {
      setUp(true);
    }
    setScroll(yScroll);
  }
  return (
    <div className="navbar">
      <Row xs={12} className="navbar__topRow">
        <Col xs={12} className="title__responsive">
          <Link to={"/"}>
            <img style={{ width: "6rem" }} alt="" src={logoNavBar}></img>
          </Link>
        </Col>
        <Col
          xs={4}
          md={3}
          lg={4}
          className="navbar__topRow__component__spartanburg"
        >
          <Link to={"/locations"}>Greenvile & Spartanburg</Link>
        </Col>
        <Col xs={5} md={4} lg={4} className="navbar__topRow__component">
          864 448 4866
        </Col>
        <Col xs={5} lg={4} className="navbar__topRow__component">
          <Helmet>
            <link
              rel="stylesheet"
              media="screen"
              href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
            />
            <script
              src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js"
              clienthub_id="c97c1b1b-e69c-4439-9e74-53580fa9c440"
              form_url="https://clienthub.getjobber.com/client_hubs/c97c1b1b-e69c-4439-9e74-53580fa9c440/public/work_request/embedded_dialog_work_request_form"
            ></script>
          </Helmet>
          <button
            className="navbar__topRow__component__button"
            name="button"
            type="button"
            id="work-request-button-c97c1b1b-e69c-4439-9e74-53580fa9c440"
          >
            Schedule here
          </button>
        </Col>
        <Col
          xs={2}
          lg={1}
          className="text-left navbar__col__toggle navbar__responsive__col"
          id="margenArriba"
        >
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!open)}
            aria-controls="navbarCollapse"
            aria-expanded={open}
            style={{ padding: "0" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Col>
      </Row>

      <Row
        className="navbar__options"
        style={up ? { minHeight: "17vh" } : { minHeight: "5vh" }}
      >
        <Col className="navbar__options__component">
          <Link to={"/services/plumbing"}>Plumbing</Link>
        </Col>
        <Col className="navbar__options__component">
          <Link to={"/services/draingCleaning"}>Drain Cleaning</Link>
        </Col>
        <Col className="navbar__options__component">
          <Link to={"/services/pipeDescaling"}>
            Pipe Descaling and Patching
          </Link>
        </Col>
        <Col className="navbar__options__component">
          <Link to={"/"}>
            <img
              className="navbar__options__component__image"
              alt=""
              src={logoNavBar}
              style={up ? {} : { width: "100px" }}
            ></img>
          </Link>
        </Col>
        <Col className="navbar__options__component">
          <Link to={"/services/cameraInspection"}>Camera Inspection</Link>
        </Col>
        <Col className="navbar__options__component">
          <Link to={"/aboutUs"}>About</Link>
        </Col>
        <Col className="navbar__options__component">
          <Link to={"/locations"}>Location</Link>
        </Col>
      </Row>

      <Collapse in={open}>
        <div id="navbarCollapse">
          <div className="navbarItemsContainer">
            <Row xs={12} className="navbar__responsive">
              <Row xs={12}>
                <Col className="navbar__responsive__component">
                  <Link
                    className="navbar__responsive__component__link"
                    to={"/services/plumbing"}
                  >
                    Plumbing
                  </Link>
                </Col>
              </Row>
              <Row xs={12}>
                <Col className="navbar__responsive__component">
                  <Link to={"/services/draingCleaning"}>Drain Cleaning</Link>
                </Col>
              </Row>
              <Row xs={12}>
                <Col className="navbar__responsive__component">
                  <Link to={"/services/pipeDescaling"}>
                    Pipe Descaling and Patching
                  </Link>
                </Col>
              </Row>
              <Row xs={12}>
                <Col className="navbar__responsive__component">
                  <Link to={"/services/cameraInspection"}>
                    Camera Inspection
                  </Link>
                </Col>
              </Row>
              <Row xs={12}>
                <Col className="navbar__responsive__component">
                  <Link to={"/aboutUs"}>About</Link>
                </Col>
              </Row>
              <Row xs={12}>
                <Col className="navbar__responsive__component">
                  <Link to={"/locations"}>Location</Link>
                </Col>
              </Row>
            </Row>
          </div>
        </div>
      </Collapse>
    </div>
  );
};
