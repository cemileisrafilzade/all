import { createGrid } from "../../utils";

const SET_SIZE = "SET_SIZE";
const SET_SPEED = "SET_SPEED";
const SET_GRID = "SET_GRID";
const START_GAME = "START_GAME";

export const initialState = {
  step: 2,
  size: 10,
  speed: 3,
  grid: createGrid(10, 10, { status: "default" })
};

export function reducer(state, { type, payload }) {
  switch (type) {
    case SET_SIZE:
      return {
        ...state,
        size: payload
      };
    case SET_SPEED:
      return {
        ...state,
        speed: payload
      };
    case SET_GRID:
      return {
        ...state,
        grid: payload
      };
    case START_GAME:
      return {
        ...state,
        step: 2,
        size: +payload.size,
        speed: +payload.speed,
        grid: createGrid(+payload.size, +payload.size, { status: "default" })
      };
    default:
      return state;
  }
}

export const setSizeAC = payload => ({
  type: SET_SIZE,
  payload
});
export const setSpeedAC = payload => ({
  type: SET_SPEED,
  payload
});
export const setGridAC = payload => ({
  type: SET_GRID,
  payload
});
export const startGameAC = payload => ({
  type: START_GAME,
  payload
});
