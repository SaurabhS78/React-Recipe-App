import React from "react";
import { render } from "react-dom";
import { Col, Row, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col>My Title</Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Header;
