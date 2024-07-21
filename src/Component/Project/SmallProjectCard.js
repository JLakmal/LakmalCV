import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../Css/projectCard.css";
const SmallProjectCard = ({ KeyProject }) => {
  return (
    <Card className="project-card">
      <h2>{KeyProject.ManTitle}</h2>
      <hr />
      {/* <Card.Img variant="top" src={project.image} /> */}
      <Card.Body>
        <Card.Title>
          {/* <a href={project.link} className="project.link">
            {project.link}
          </a> */}
          <h3>{KeyProject.title}</h3>
        </Card.Title>
        <Card.Text>{KeyProject.description}</Card.Text>
        <Button variant="primary" href="{project.liveLink}">
          Click
        </Button>
      </Card.Body>
    </Card>
  );
};
export default SmallProjectCard;
