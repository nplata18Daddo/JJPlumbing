import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import izquierdaFooter from "../../assets/images/image17.png";
import derechaFooter from "../../assets/images/image18.png";
import izquierdaImg from "../../assets/images/jjfooter.png";
import facebook from "../../assets/images/Facebook.png";
import ig from "../../assets/images/Instagram.png";
import linkedin from "../../assets/images/LinkedIn.png";
import { Link, NavLink } from "react-router-dom";



export const Footer = () => {
    return (
        <div className="footer">
           <Row className="footer_row" style={{maxWidth:"100vw"}}>
            <Col xs={1} lg={3} className="footer__left">
            <img className="footer__left__img" alt="" src={izquierdaImg}></img>
            </Col>
            <Col xs={6} lg={6} className="footer__mid">
                <Row xs={12} className="footer__mid__links">
                    QUICK LINKS
                </Row>
                <Row xs={12} className="footer__mid__linkContainer">
                    <Col xs={6}>
                        <Link to={"/about"}>
                    About us
                        </Link>
                    </Col>
                    <Col xs={6}>
                        <Link to={"/location"}>
                        Locations
                        </Link>
                    </Col>
                </Row>
            </Col>
            <Col xs={5} lg={3} className="footer__rigth">
                
                <Row xs={12}className="footer__rigth__follow">
                    FOLLOW US
                </Row>
                <Row xs={12}className="footer__rigth__iconsContainer">
                <Col xs={4}className="footer__rigth__iconsContainer__icon">
                <img className="footer__rigth__iconsContainer__icon__img" alt="" src={facebook}></img>
                </Col >
                <Col xs={4} className="footer__rigth__iconsContainer__icon">
                <img className="footer__rigth__iconsContainer__icon__img" alt="" src={ig}></img>
                </Col >
                <Col xs={4} className="footer__rigth__iconsContainer__icon">
                <img className="footer__rigth__iconsContainer__icon__img" alt="" src={linkedin}></img>
                </Col >
                </Row>
            
            </Col>
           </Row>
        </div>
        
        );
  };
  