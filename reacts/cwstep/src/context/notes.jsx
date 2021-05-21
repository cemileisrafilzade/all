import React, { createContext, useReducer } from "react";

export const NoteContext = createContext();

const ADD_NOTE = "ADD_NOTE";

const addNoteAC = payload => ({
  type: ADD_NOTE,
  payload
});

const initialState = {
  notes: [
    {
      id: 1,
      title: "Hello World",
      text: "Lorem ipsum dolor sit amet.",
      date: 1585583586731,
      color: "#c42d53"
    },
    {
      id: 2,
      title: "Hello World",
      text: "Lorem ipsum dolor sit amet.",
      date: 1585583586731,
      color: "#867abf"
    },
    {
      id: 3,
      title: "Hello World",
      text: "Lorem ipsum dolor sit amet.",
      date: 1585583586731,
      color: "#1ac7b6"
    }
  ]
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, payload]
      };
    default:
      return state;
  }
}

export const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNote = note => dispatch(addNoteAC(note));

  return (
    <NoteContext.Provider value={{ ...state, addNote }}>
      {children}
    </NoteContext.Provider>
  );
};
