// src/Components/ProjectCard.js

import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
const ProjectCard = ({ project }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <Card className="project-card">
      {/* <Card.Img variant="top" src={project.image} /> */}
      <Card.Body>
        <Card.Title>
          <a href={project.link} className="project-link">
            {project.name}
          </a>
          <hr />
          <h5 className="fw-bold">{project.title} </h5>
        </Card.Title>
        <Card.Text
          className={showFullDescription ? "full-text" : "truncated-text"}
          onClick={toggleDescription}
        >
          {project.description}
        </Card.Text>
        <Button variant="primary" href={project.liveLink}>
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
