import React, { createContext, useReducer } from "react";
import { createGrid } from "../utils";

export const DAgameContext = createContext();

const createGridDA = createGrid.bind(null, 5, 5, { selected: false });

// ACTIONS TYPES
const START_GAME = "START_GAME";
const CHANGE_P1_DEFENCE = "CHANGE_P1_DEFENCE";
const UPDATE_GRID = "UPDATE_GRID";
const CHANGE_ACTIVE_PLAYER = "CHANGE_ACTIVE_PLAYER";
const CHANGE_PLAYER_HP = "CHANGE_PLAYER_HP";
const REFRESH_DATA_TO_NEXT_ROUND = "REFRESH_DATA_TO_NEXT_ROUND";

// VALUE FOR START
const initialState = {
  isInProgress: false,
  activePlayer: 1,
  p1: {
    health: 10,
    defence: createGridDA(),
    attack: createGridDA()
  },
  p2: {
    health: 10,
    defence: createGridDA(),
    attack: createGridDA()
  }
};

// REDUCER WHAT WILL BE CALLED ON EVERY DISPATCH
function reducer(state, { type, payload }) {
  switch (type) {
    case START_GAME:
      return {
        ...state,
        isInProgress: true
      };
    case CHANGE_P1_DEFENCE:
      return {
        ...state,
        p1: {
          ...state.p1,
          defence: payload
        }
      };
    case UPDATE_GRID:
      return {
        ...state,
        [payload.user]: {
          ...state[payload.user],
          [payload.type]: payload.grid
        }
      };
    case CHANGE_ACTIVE_PLAYER:
      return {
        ...state,
        activePlayer: payload
      };
    case CHANGE_PLAYER_HP:
      return {
        ...state,
        [payload.user]: {
          ...state[payload.user],
          health: payload.points
        }
      };
    case REFRESH_DATA_TO_NEXT_ROUND:
      return {
        ...state,
        activePlayer: 1,
        p1: {
          ...state.p1,
          defence: createGridDA(),
          attack: createGridDA()
        },
        p2: {
          ...state.p2,
          defence: createGridDA(),
          attack: createGridDA()
        }
      };
    default:
      return state;
  }
}

// ACTIONS CREATORS
const startGame = () => ({
  type: START_GAME
});
const refreshDataToNextRound = () => ({
  type: REFRESH_DATA_TO_NEXT_ROUND
});
const changeP1DefenceAction = payload => ({
  type: CHANGE_P1_DEFENCE,
  payload
});

const changeGrid = payload => ({
  type: UPDATE_GRID,
  payload
});

const changeActivePlayer = payload => ({
  type: CHANGE_ACTIVE_PLAYER,
  payload
});

const changePlayerHP = payload => ({
  type: CHANGE_PLAYER_HP,
  payload
});

export const DAgameCP = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const runGame = () => dispatch(startGame());

  const changeP1Defence = (y, x, status) => {
    const newGrid = [...state.p1.defence];
    newGrid[y] = [...newGrid[y]];
    newGrid[y][x] = { selected: status };

    dispatch(changeP1DefenceAction(newGrid));
  };

  const updateGrid = (user, type, [y, x], status) => {
    const newGrid = [...state[user][type]];
    newGrid[y] = [...newGrid[y]];
    newGrid[y][x] = { selected: status };

    dispatch(
      changeGrid({
        user,
        type,
        grid: newGrid
      })
    );
  };

  const changeAP = num => {
    dispatch(changeActivePlayer(num));
  };

  const changePHP = (user, points) => {
    dispatch(changePlayerHP({ user, points }));
  };

  const refreshRound = () => {
    dispatch(refreshDataToNextRound());
  };

  return (
    <DAgameContext.Provider
      value={{
        ...state,
        runGame,
        changeP1Defence,
        updateGrid,
        changeAP,
        changePHP,
        refreshRound
      }}
    >
      {children}
    </DAgameContext.Provider>
  );
};
