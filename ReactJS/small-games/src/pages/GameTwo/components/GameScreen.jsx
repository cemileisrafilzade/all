import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const GameScreen = ({ initialGrid, speed, size }) => {
  const [grid, setGrid] = useState(initialGrid);

  const hightlightCell = () => {
    console.log("hightlightCell");

    setGrid(grid => {
      const y = getRandom(0, size - 1);
      const x = getRandom(0, size - 1);
      console.log("setGrid");
      const newGrid = [...grid];
      newGrid[y] = [...newGrid[y]];
      newGrid[y][x] = { status: "highlighted" };
      return [...newGrid];
    });
  };

  useEffect(() => {
    setTimeout(() => {
      hightlightCell();
      console.log("called");
    }, 2 * 1000);
  });

  return (
    <Container>
      <Inner>
        {grid &&
          grid.map((row, y) => (
            <Row key={y}>
              {row.map(({ status }, x) => (
                <Cell key={x} className={status}>
                  {status}
                </Cell>
              ))}
            </Row>
          ))}
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

const Cell = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid grey;

  &.highlighted {
    background: lightblue;
  }
`;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
