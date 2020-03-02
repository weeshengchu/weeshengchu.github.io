import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  // faFacebook,
  // faTwitter,
  // faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

// 3. Setting up the Footer
function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <a href="https://github.com/weeshengchu" className="github social">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/wee-sheng-chu-557321119/"
              className="linkedin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>{" "}
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            &copy;weeshengchu 2020
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
