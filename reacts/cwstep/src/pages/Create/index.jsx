import React, { useContext } from "react";

import { NoteContext } from "../../context/notes";
import { Container } from "../../commons";
import { NoteForm } from "../../components";



export const Create = ({ history }) => {
  const { addNote } = useContext(NoteContext);

  const createNoteSuccess = note => {
    addNote(note);
    history.push("/");
  };

  return (
    <Container>
      <h1>Create</h1>
      <NoteForm submitBtnText="Create" onSuccessSubmit={createNoteSuccess}  />
    </Container>
  );
};
