import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Css/HomePage.css";
import "../../Css/Font.css";
import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";
import FunFactCard from "./FanFact";
import ContactCard from "./ContactCard";
import ImgOne from "../../assets/Images/Project img/Group 53.png";
const Skills = [
  {
    name: "Languages",
    list: "JavaScript | PHP | Java | C# ",
  },
  {
    name: "Other",
    list: "HTML | CSS | REST | Bootstrap Tailwind css | WordPress Elementor ",
  },
  {
    name: "Tools",
    list: "VSCode | Android Studio | Git Font Awesome | PhotoShop Figma | Illustrator  ",
  },
  {
    name: "Databases",
    list: "MySQL | SSMS | Mongo | SQLite",
  },
  {
    name: "Frameworks",
    list: "React | Larvel | Express.js | . NET",
  },
];
const Funs = [
  { name: "I like winter more than summer" },
  { name: "My favorite movie is The Green Mile" },
  { name: "My favorite movie is The Green Mile" },
];
const MyConts = [
  { name: "contact here", title: "+94 77 697 7115" },
  { name: "Message me here", title: "lakmalbandaraibtc@gmail.com" },
];
export const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <Container className="row-custom-color">
          <div className="row-custom-color">
            <Container style={{ fontFamily: "FiraCode" }} className="">
              <Row className="">
                <Col className="custom-about-user">
                  <p>Hello,I'm Lakmal!</p>
                  <p>
                    I'm qulfied and proffsional full-stack developer in
                    Kandy,Sri Lanka. I can develop responcive e-commmrece
                    websites from scratch and raise them into modern
                    user-friendly web experiences.
                  </p>
                  <p>
                    Transforming my creativity and knowledge into a websites has
                    been my passion for over a year.I have been helping various
                    clients to establish their presence online. I always strive
                    to learn about the newest technologies and frameworks.
                  </p>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </div>
          <div className="">
            <Container style={{ fontFamily: "FiraCode" }}>
              <div>
                <h2>
                  <span style={{ color: "#C778DD" }}>#</span>Skills
                </h2>
                <Container
                  className="custom-padding-top"
                  style={{ fontFamily: "FiraCode" }}
                >
                  <Row className="">
                    {Skills.map((MySkill, index) => (
                      <Col key={index} md={4}>
                        <SkillCard MySkill={MySkill} />
                      </Col>
                    ))}
                  </Row>
                </Container>
                {/* Fun fact section */}
                <h2>
                  <span style={{ color: "#C778DD" }}>#</span>My-fun-facts
                </h2>
                <div>
                  <Container style={{ fontFamily: "FiraCode" }} className="">
                    <Row className="">
                      <Col className="custom-about-user funlist-font-size">
                        <Row className="">
                          {Funs.map((MyFun, index) => (
                            <Col key={index} md={6}>
                              <FunFactCard MyFun={MyFun} />
                            </Col>
                          ))}
                        </Row>
                      </Col>
                      <Col>
                        <img src={ImgOne} alt="dada" className="fun-fact-pic" />
                      </Col>
                    </Row>
                  </Container>{" "}
                </div>
              </div>
              {/* Contact us */}
              <h2>
                <span style={{ color: "#C778DD" }}>#</span>Contacts
              </h2>
              <Container>
                <Row className="">
                  <Col className="custom-about-user">
                    I’m interested in freelance opportunities. However, if you
                    have other request or question, don’t hesitate to contact me
                  </Col>
                  <Col>
                    {/* <img src={ImgOne} alt="dada" className="fun-fact-pic" /> */}
                    <Row className="">
                      {MyConts.map((MyCont, index) => (
                        <Col key={index} md={11}>
                          <ContactCard MyCont={MyCont} />
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
