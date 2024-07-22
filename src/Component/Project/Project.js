import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Css/Font.css";
import "../../Css/HomePage.css";
import "../../Css/Project.css";

import ProjectCard from "./ProjectCard";
import SmallProjectCard from "./SmallProjectCard";

export const ProjectHeading = () => {
  return (
    <h2 className="complete-project" style={{ fontFamily: "FiraCode" }}>
      #Completed Project
    </h2>
  );
};

const projects = [
  {
    name: "#NewsPaper Delivery App",
    //
    title: "",
    description:
      "A newspaper delivery app was developed, and after the customer selects the name and date of the newspaper, the app checks the price and whether the newspapers are available or not. Then the customer can provide his address through google API. ",
    link: "https://github.com/JLakmal/newspaper-anddoid-app",
    liveLink: "https://github.com/JLakmal/newspaper-anddoid-app",
  },
  {
    name: "#Time campus",
    description:
      "Developed a dynamic website for a leading campus, providing a user friendly platform for students, This robust platform enables students and staff to access and organize their studies efficiently.",
    // image:
    //   "https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg",
    link: "https://www.timescampus.lk/",
    liveLink: "https://www.timescampus.lk/",
  },
  {
    name: "#Ocean paradise",
    description:
      "Constructed a robust website for a leading tourism company, featuring a dynamic tour customization module and a streamlined user interfacefor effortless customer interactions.",
    // image:
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwVd07rcBUxKVqf17F_Li5fy-a_zni7JuEQ&s",
    // link: "https://www.youtube.com/",
    // liveLink: "https://www.youtube.com/",
  },
  {
    name: "#GREDOTS",
    description:
      "Developed comprehensive HRIS (Human Resource Information System) tailored for US corporations. The platform allows business owners to register their companies, manage employees, assign tasks, oversee progress, and handle HR tasks efficiently.",
    image: "../../assets/Images/Project img/AI recommodation.jpg",
    link: "https://www.youtube.com/",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "#Task and project management",
    description:
      "Task and project management tool is a software application that will allow users to manage and track tasks and projects in a streamlined manner..",
    image: "../../assets/Images/Project img/AI recommodation.jpg",
    link: "https://www.youtube.com/",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "#Seed and farmers management",
    description:
      "Farmers can buy seeds, send them for cultivation and new farmers can be cultivated through this system.",
    image: "../../assets/Images/Project img/AI recommodation.jpg",
    link: "https://www.youtube.com/",
    liveLink: "https://www.youtube.com/",
  },
];

const keyProjects = [
  {
    name: "# Sri Lanka recipe web",
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

export const SmallHeading = () => {
  return (
    <h2 className="key-project" style={{ fontFamily: "FiraCode" }}>
      #key Project
    </h2>
  );
};
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
