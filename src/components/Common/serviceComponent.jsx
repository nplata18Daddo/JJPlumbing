import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const ServiceComponent = (props) => {
  return (
    <div
      className={
        props.color === "main"
          ? "service__container__background-main"
          : "service__container__background-secondary"
      }
    >
      <Row
        className={
          props.color === "main"
            ? "flex-col-reverse service__component "
            : "service__component"
        }
      >
        <Col xs={12} lg={8}>
          <Row>
            <Col xs={12}>
              <p
                className={
                  props.color === "main"
                    ? "service__title__background-secondary"
                    : "service__title__background-main"
                }
              >
                {props.title}
              </p>
            </Col>
            <Col xs={12}>
              <p
                className="text-justify service__text"
                style={{
                  textAlign: "justify",
                  color: props.color === "main" ? "black" : "white",
                }}
              >
                {props.text}
              </p>
            </Col>
            <div xs={12} className="text-center no-height">
              <Button className="button__fourth-filled">More Info</Button>
            </div>
          </Row>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "1rem",
          }}
          xs={12}
          lg={4}
        >
          <img src={`/images/${props.img}`}></img>
        </Col>
      </Row>
    </div>
  );
};
