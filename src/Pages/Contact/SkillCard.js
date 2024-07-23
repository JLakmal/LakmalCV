import React from "react";
import { Card } from "react-bootstrap";
import "../../Css/SkillCard.css";
const SkillCard = ({ MySkill }) => {
  return (
    <Card className="project-card">
      <Card.Body>
        <Card.Title>
          <h3> {MySkill.name}</h3>
          <hr />
          <p className="tech-stack-color">{MySkill.list}</p>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
export default SkillCard;
