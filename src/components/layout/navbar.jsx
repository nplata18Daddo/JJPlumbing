import React, { useState, useTransition, useEffect, useNavigate } from "react";
import { Row, Col, Collapse, Button } from "react-bootstrap";

import logoNavBar from "../../assets/images/jjnavbarOptions.png"



export const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (
        <div className="navbar">
            <Row xs={12} className="navbar__topRow">
                
            <Col xs={3} lg={3} className="navbar__topRow__component__spartanburg">
                Greenvile & Spartanburg
            </Col>
            <Col xs={4} lg={3} className="navbar__topRow__component">
                864 448 4866
            </Col>
            <Col xs={6} lg={6} className="navbar__topRow__component">
                <Button className="navbar__topRow__component__button">Schedule here</Button>
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
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </Col>
            
            </Row>

            <Row className="navbar__options">
                
                <Col className="navbar__options__component">
                    Heating
                </Col>
                <Col className="navbar__options__component">
                    Cooling
                </Col>
                <Col className="navbar__options__component">
                    Plumbing
                </Col>
                <Col className="navbar__options__component">
                    <img className="navbar__options__component__image" alt="" src={logoNavBar}></img>
                </Col>
                <Col className="navbar__options__component">
                    Electrical
                </Col>
                <Col className="navbar__options__component">
                    About
                </Col>
                <Col className="navbar__options__component">
                    Location
                </Col>
            </Row>
            
            <Collapse in={open}>
          <div id="navbarCollapse">
            
            <Row xs={12} className="navbar__responsive">
            
            <Row xs={12}><Col>Heating</Col></Row>
            <Row xs={12}><Col>Cooling</Col></Row>
            <Row xs={12}><Col>Plumbing</Col></Row>
            <Row xs={12}><Col>Electrical</Col></Row>
            <Row xs={12}><Col>About</Col></Row>
            <Row xs={12}><Col>Location</Col></Row>

        </Row>
            
          </div>
        </Collapse>


        
        </div>
        
        );
  };
  