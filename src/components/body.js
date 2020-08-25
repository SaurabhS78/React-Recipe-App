import React from "react";
import { Container } from "react-bootstrap";
import Search from "./search";
import RecipeList from "./recipeList";

const Body = () => {
  return (
    <Container fluid>
      <Search />
      <RecipeList />
    </Container>
  );
};

export default Body;
