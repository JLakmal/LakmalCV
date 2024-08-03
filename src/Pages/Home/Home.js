import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../../Css/HomePage.css";
import "../../Css/Font.css";
import "../../Css/profilePic.css";
import Profile from "../../assets/Images/cv-cover-4to update.png";
import { Project } from "../../Component/Project/Project";
import { Skill, Contact } from "../Contact/Contact";
export const Home = () => {
  return (
    <>
      <div className="home page-background">
        <Container
          style={{ fontFamily: "FiraCode" }}
          className="row-custom-color"
        >
          <Row>
            <Col className="mt-custom-user">
              <h1 className="font:bold font-weight-bold">
                I am a
                <spain style={{ color: "#C778DD" }}>
                  {" "}
                  Full stack developer{" "}
                </spain>{" "}
                and <spain style={{ color: "#C778DD" }}>web designer</spain>
              </h1>
              <div className="mt-4">
                <spain style={{ color: "gray" }}>
                  I crafts responsive E-commerce websites where technologies
                  meet creativity
                </spain>
              </div>
              <button className="mt-4 p-3 button-background">
                {" "}
                Contact me!!
              </button>
            </Col>
            <Col>
              <img src={Profile} alt="Logo" className="profilePic" />
            </Col>
          </Row>
          <Row className="row-custom-color">
            <Col>
              {" "}
              <div className="margin-quote">
                <p style={{ fontFamily: "FiraCode" }}>
                  You’ve got to find what you love…. The only way to do great
                  work is to love what you do. If you haven’t found it yet, keep
                  looking, and don’t settle.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="project-name-padding">
            <h1 style={{ fontFamily: "FiraCode" }}>
              <spain style={{ color: "#C778DD" }}>#</spain> Project{" "}
              <spain style={{ color: "#C778DD" }}>--------------</spain> <hr />
            </h1>
          </Row>
          <Row className="">
            <Col>
              <Project pageBg={true} />
            </Col>
          </Row>
          <Row className="about-name-padding">
            <h1 style={{ fontFamily: "FiraCode" }}>
              <spain style={{ color: "#C778DD" }}>#</spain>Skills{" "}
              <spain style={{ color: "#C778DD" }}>--------------</spain> <hr />
            </h1>
          </Row>
          <Row className="">
            <Col className="">
              <Skill HideHeding={true} />
            </Col>
          </Row>
          <Row className="skill-name-padding">
            <h1 style={{ fontFamily: "FiraCode" }}>
              <spain style={{ color: "#C778DD" }}>#</spain>About me{" "}
              <spain style={{ color: "#C778DD" }}>--------------</spain> <hr />
            </h1>
            <Row className="">
              <Col className="">
                <Contact />
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  );
};

// export const HomeTwo = () => {
//   return <div className="home page-background">dasdasdasd</div>;
// };
