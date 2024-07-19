import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../Css/Font.css";
import "../../Css/HomePage.css";
import "../../Css/Project.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "News Paper",
    description:
      "Amet tempor consequat fugiat qui incididunt ullamco veniam. Aliquip aliquip ex qui qui velit. Fugiat laborum elit laboris tempor duis consectetur commodo id velit laborum. Pariatur est consequat anim veniam id in. Nisi Lorem aliquip enim adipisicing non duis dolore sunt. Veniam velit quis tempor tempor tempor anim cupidatat eiusmod nisi reprehenderit cillum.",
    image:
      "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg",
    link: "https://www.youtube.com/",
    liveLink: "https://www.youtube.com/",
  },
  {
    name: "News Paper",
    description:
      "Amet tempor consequat fugiat qui incididunt ullamco veniam. Aliquip aliquip ex qui qui velit. Fugiat laborum elit laboris tempor duis consectetur commodo id velit laborum. Pariatur est consequat anim veniam id in.",
    image:
      "https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg",
    link: "https://www.youtube.com/",
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
const Project = () => {
  return (
    <div className="Project page-background">
      <h1>This is Project page</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Project;
