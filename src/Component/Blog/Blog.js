import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Css/HomePage.css";
import "../../Css/Blog.css";

import HeroImg from "../../assets/Images/HeroImage.jpg";
import HTMLImg from "../../assets/Images/Project img/HTML5_logo_and_wordmark.svg.png";
import { Container, Row, Col } from "react-bootstrap";
function blogOne() {
  return (
    <>
      <div className="page-background">
        <Container>
          <h2> #Blog series</h2>
          <img src={HeroImg} alt="Hero" className="hero-img" />
        </Container>
      </div>
      <div className="page-background">
        <Container>
          <Row>
            <Col>
              {" "}
              <img src={HTMLImg} alt="Hero" className="Blog-img " />
            </Col>
            <Col>
              What is Web Development? Web development refers to the process of
              creating and maintaining websites. It involves various tasks such
              as web design, content creation, client-side/server-side
              scripting, and network security configuration. The primary purpose
              of web development is to build functional, user-friendly, and
              visually appealing websites. The primary purpose of web
              development is to build functional, user-friendly, and visually
              appealing websites.
            </Col>
          </Row>
          <Row>
            <Col>1</Col>
            <Col>2</Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default blogOne;
