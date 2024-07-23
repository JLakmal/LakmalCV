import React from "react";
import { Card } from "react-bootstrap";
import "../../Css/FunFact.css";

const FunFactCard = ({ MyFun }) => {
  return (
    <Card className="project-card ">
      <Card.Body>
        <Card.Title>
          <h3 className="funlist-font-size"> {MyFun.name}</h3>
          {/* <hr /> */}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
export default FunFactCard;
