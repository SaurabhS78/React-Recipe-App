import React from "react";
import { Col, Row, Card } from "react-bootstrap";

const FoodCard = ({ recipe }) => {
  const { label, calories, image, totalTime, dietLabels } = recipe;

  return (
    <Card className="foodcard">
      <span className="time">{totalTime !== 0 ? totalTime : 45} mins</span>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Row className="px-2">
          <Col sm={9} className="px-0 title">
            {label}
          </Col>
          <Col sm={3} className="px-0 cal ta-end">
            {Math.round(calories)} Cal
          </Col>
        </Row>
        <Row className="serving px-2 mt-2">
          Servings: {recipe.yield} Foodies
        </Row>
        {dietLabels.length > 0 ? (
          <Row className="cal px-2 mt-1">
            Diet Labels: {dietLabels.map((label) => label + ", ")}
          </Row>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
