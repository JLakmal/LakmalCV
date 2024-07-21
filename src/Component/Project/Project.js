import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Css/Font.css";
import "../../Css/HomePage.css";
import "../../Css/Project.css";

import ProjectCard from "./ProjectCard";
import SmallProjectCard from "./SmallProjectCard";

export const ProjectHeading = () => {
  return <h2 className="complete-project">#Completed Project</h2>;
};

const projects = [
  {
    name: "# NewsPaper Delivery App",
    //
    title: "hello",
    description:
      "A newspaper delivery app was developed, and after the customer selects the name and date of the newspaper, the app checks the price and whether the newspapers are available or not. Then the customer can provide his address through google API. ",
    link: "https://github.com/JLakmal/newspaper-anddoid-app",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "News Paper",
    description:
      "Developed a dynamic website for a leading campus, providing a user friendly platform for students, This robust platform enables students and staff to access and organize their studies efficiently.",
    image:
      "https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg",
    link: "https://github.com/Sajidameen2323/web-project-sem4",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "News Paper",
    description: "Mobile app dadasda",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwVd07rcBUxKVqf17F_Li5fy-a_zni7JuEQ&s",
    link: "https://www.youtube.com/",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "News Paper",
    description: "Mobile app dadasda",
    image: "../../assets/Images/Project img/AI recommodation.jpg",
    link: "https://www.youtube.com/",
    liveLink: "https://www.youtube.com/",
  },
];

const keyProjects = [
  {
    name: "News Paper",
    ManTitle: "Main Title",
    title: "hello",
    description:
      "Amet tempor consequat fugiat qui incididunt ullamco veniam. Aliquip aliquip ex qui qui velit. Fugiat laborum elit laboris tempor duis consectetur commodo id velit laborum. ",
    image:
      "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg",
    link: "https://www.youtube.com/",
    liveLink: "https://www.youtube.com/",
  },
];
export const Project = () => {
  return (
    <div className="home page-background">
      <Container className="" style={{ fontFamily: "FiraCode" }}>
        <Row className="row-custom-color">
          {projects.map((project, index) => (
            <Col key={index} md={4}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Project;

export const SmallProject = () => {
  return (
    <div className="home page-background">
      <Container className="" style={{ fontFamily: "FiraCode" }}>
        <Row className="row-custom-color">
          {keyProjects.map((KeyProject, index) => (
            <Col key={index} md={4}>
              <SmallProjectCard KeyProject={KeyProject} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
