import React from "react";
import { Card } from "react-bootstrap";
import "../../Css/FunFact.css";
const ContactCard = ({ MyCont }) => {
  return (
    <Card className="project-card ">
      <Card.Body>
        <Card.Title>
          <h3 className=""> {MyCont.name}</h3>
          {/* <hr /> */}
        </Card.Title>
        {MyCont.title}
      </Card.Body>
    </Card>
  );
};
export default ContactCard;
