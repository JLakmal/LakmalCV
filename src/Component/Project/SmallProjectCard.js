import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../../Css/projectCard.css";
import "../../Css/Project.css";
const SmallProjectCard = ({ KeyProject }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <Card className="project-card">
      {/* <Card.Img variant="top" src={project.image} /> */}
      <Card.Body>
        <Card.Title>
          <a href={KeyProject.link} className="project-link">
            {KeyProject.name}
          </a>
          <hr />
          <p className="tech-stack-color">{KeyProject.title}</p>
        </Card.Title>
        <Card.Text
          className={showFullDescription ? "full-text" : "truncated-text"}
          onClick={toggleDescription}
        >
          {KeyProject.description}
        </Card.Text>
        <Button variant="primary" href="{project.liveLink}">
          View
        </Button>
      </Card.Body>
    </Card>
  );
};
export default SmallProjectCard;
