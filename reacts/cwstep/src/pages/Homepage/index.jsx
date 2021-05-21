import React, { useContext } from "react";

import { NoteContext } from "../../context/notes";
import { Container, Row } from "../../commons";
import { Note } from "../../components";
// import {SingleNote } from "./pages";


export const Homepage = () => {
  const { notes } = useContext(NoteContext);

  return (
    <Container>

      <h1>Homepage</h1>

      <Row>
        {notes.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </Row>
    </Container>
  );
};
