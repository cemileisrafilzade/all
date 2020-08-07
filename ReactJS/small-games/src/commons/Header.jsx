import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => (
  <Container>
    <NavLink to="/game-1">Defence&Attack Game</NavLink>
    <NavLink to="/game-2">Game Two</NavLink>
  </Container>
);

const Container = styled.header`
  padding: 20px;
  text-align: center;

  a {
    margin: 0 10px;
    color: black;
    text-decoration: none;
    &.active {
      text-decoration: underline;
    }
  }
`;
