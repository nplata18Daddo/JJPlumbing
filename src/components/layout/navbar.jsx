import React, { useState, useTransition, useEffect, useNavigate } from "react";
import { Row, Col, Collapse, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import logoNavBar from "../../assets/images/jjnavbarOptions.png";

export const Navbar = () => {
  const [allowScroll, setAllowScroll] = useState(0);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    let yScroll = window.scrollY;
    setScroll(yScroll);
    console.log(yScroll);
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
          <Link to={"/location"}>Greenvile & Spartanburg</Link>
        </Col>
        <Col xs={5} md={4} lg={4} className="navbar__topRow__component">
          864 448 4866
        </Col>
        <Col xs={5} lg={4} className="navbar__topRow__component">
          <Button className="navbar__topRow__component__button">
            Schedule here
          </Button>
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
        style={scroll <= 1000 ? { minHeight: "17vh" } : { minHeight: "5vh" }}
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
              style={scroll <= 1000 ? {} : { width: "100px" }}
            ></img>
          </Link>
        </Col>
        <Col className="navbar__options__component">
          <Link to={"/services/cameraInspection"}>Camera Inspection</Link>
        </Col>
        <Col className="navbar__options__component">
          <Link to={"/about"}>About</Link>
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
                  <Link to={"/about"}>About</Link>
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
