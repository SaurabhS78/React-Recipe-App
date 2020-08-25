import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header = () => {
  return (
    <Container className="header">
      <Row>
        <Col className="logo pl-0">Plato</Col>
        <GitHubIcon className="logo" />
      </Row>
    </Container>
  );
};

export default Header;
