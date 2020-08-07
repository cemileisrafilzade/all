import React, { useReducer } from "react";

import {
  reducer,
  initialState,
  setSizeAC,
  setSpeedAC,
  setGridAC,
  startGameAC
} from "./reducer";
import { FirstScreen, GameScreen } from "./components";

export const GameTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { size, speed, grid, step } = state;

  const startGame = ({ size, speed }) => dispatch(startGameAC({ size, speed }));

  // const setSize = val => {
  //   dispatch(setSizeAC(val));
  // };
  // const setSpeed = val => {
  //   dispatch(setSpeedAC(val));
  // };
  // const setGrid = val => {
  //   dispatch(setGridAC(val));
  // };

  return (
    <div>
      {step === 1 ? (
        <FirstScreen startGame={startGame} />
      ) : (
        <GameScreen initialGrid={grid} speed={speed} size={size} />
      )}
    </div>
  );
};
