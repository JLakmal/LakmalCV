import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../../Css/HomePage.css";
import "../../Css/Font.css";
import Project from "../../Component/Project/Project";
export const Home = () => {
  return (
    <>
      <div className="home page-background">
        <Container style={{ fontFamily: "FiraCode" }}>
          <Row>
            <Col className="mt-custom-user">
              <h1 className="font:boldfont-weight-bold">
                I am a
                <spain style={{ color: "#C778DD" }}>
                  {" "}
                  Full stack developer{" "}
                </spain>{" "}
                and <spain style={{ color: "#C778DD" }}>web designer</spain>
              </h1>
              <div className="mt-4">
                <spain style={{ color: "gray" }}>
                  He crafts responsive websites where technologies meet
                  creativity
                </spain>
              </div>
              <button className="mt-4 p-3 button-background">
                {" "}
                Contact me!!
              </button>
            </Col>

            <Col>2 of 2</Col>
          </Row>
        </Container>
        <div className="margin-quote">
          <p style={{ fontFamily: "FiraCode" }}>
            You’ve got to find what you love…. The only way to do great work is
            to love what you do. If you haven’t found it yet, keep looking, and
            don’t settle.
          </p>
        </div>
        <Project />
      </div>
    </>
  );
};

// export const quote = () => {
//   return <div> </div>;
// };

export const HomeTwo = () => {
  return <div className="home page-background"></div>;
};
