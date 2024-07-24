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
    title: "Java| Xml | SQLite | Google Map API",
    description:
      " A newspaper delivery app was developed, and after the customer selects the name and date of the newspaper, the app checks the price and whether the newspapers are available or not. Then the customer can provide his address through google API.",
    link: "https://github.com/JLakmal/newspaper-anddoid-app",
    liveLink: "https://github.com/JLakmal/newspaper-anddoid-app",
  },
  {
    name: "#Time campus",
    title: " Laravel | JavaScript | jQuery | Ajax | Bootstrap | MySQL",
    description:
      "Developed a dynamic website for a leading campus, providing a user friendly platform for students, This robust platform enables students and staff to access and organize their studies efficiently.",
    // image:
    //   "https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg",
    link: "https://www.timescampus.lk/",
    liveLink: "https://www.timescampus.lk/",
  },
  {
    name: "#Ocean paradise",
    title: "Laravel | JavaScript | jQuery | Ajax | Bootstrap | MySQL",
    description:
      "Constructed a robust website for a leading tourism company, featuring a dynamic tour customization module and a streamlined user interfacefor effortless customer interactions.",
    // image:
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwVd07rcBUxKVqf17F_Li5fy-a_zni7JuEQ&s",
    // link: "https://www.youtube.com/",
    // liveLink: "https://www.youtube.com/",
  },
  {
    name: "#GREDOTS",
    title: "Laravel | JavaScript | jQuery | Ajax | Bootstrap | MySQL",
    description:
      "Developed comprehensive HRIS (Human Resource Information System) tailored for US corporations. The platform allows business owners to register their companies, manage employees, assign tasks, oversee progress, and handle HR tasks efficiently.",
    image: "../../assets/Images/Project img/AI recommodation.jpg",
    link: "https://www.youtube.com/",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "#Task and project management",
    title: "Laravel | JavaScript | Tailwind CSS | MySQL",
    description:
      "Task and project management tool is a software application that will allow users to manage and track tasks and projects in a streamlined manner..",
    image: "../../assets/Images/Project img/AI recommodation.jpg",
    link: "https://www.youtube.com/",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "#Seed and farmers management",
    title: "C# | MySQL",
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
    title: "HTML | JavaScript | CSS | Firebase",
    description:
      "This web site has Sri lankan unique food recipes & About how to prepare them.",
    image:
      "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg",
    link: "",
    liveLink: "",
  },
  {
    name: "# Password Generator",
    title: "HTML | JavaScript | CSS",
    description: "This app through can generate random passwords.",
    image:
      "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg",
    link: "https://github.com/JLakmal/JS.git",
    liveLink: "",
  },
  {
    name: "# Calculator",
    title: "HTML | JavaScript | CSS",
    description:
      "From this we can simple calculation(Add,Subtraction,Division & multiplication)",
    image:
      "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg",
    link: "https://github.com/JLakmal/JS.git",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "# To-do List app",
    title: "HTML | JavaScript | CSS",
    description: "Daily tasks can be easily shared through this program.",
    image:
      "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg",
    link: "https://github.com/JLakmal/JS.git",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "# Color Picker",
    title: "HTML | JavaScript | CSS",
    description: "The program has developed how to make a color mixture",
    image:
      "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg",
    link: "https://github.com/JLakmal/JS.git",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "# Google Map clone",
    title: "HTML | JavaScript | CSS",
    description: "create clone app use Js,HTML and CSS",
    image:
      "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg",
    link: "https://github.com/JLakmal/JS.git",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "# Text to speech",
    title: "HTML | JavaScript | CSS",
    description: "This app has been developed to convert words to speech.",
    image:
      "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg",
    link: "https://github.com/JLakmal/JS.git",
    liveLink: "https://www.youtube.com/",
  },
];
export const Project = ({ pageBg }) => {
  return (
    <div className={pageBg ? "" : "page-background"}>
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
