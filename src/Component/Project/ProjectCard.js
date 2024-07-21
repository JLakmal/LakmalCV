// src/Components/ProjectCard.js

import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>
          <a href={project.link} className="project-link">
            {project.name}
          </a>
        </Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Button variant="primary" href={project.liveLink}>
          Live
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
