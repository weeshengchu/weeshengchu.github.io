import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// 7. About Page
function Content(props) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        {/* 7. children -> special property */}
        <Col md={8}>{props.children}</Col>
      </Row>
    </Container>
  );
}

export default Content;
