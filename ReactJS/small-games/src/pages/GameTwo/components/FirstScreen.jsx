import React, { useState } from "react";
import styled from "styled-components";

export const FirstScreen = ({ startGame }) => {
  const [fields, setFields] = useState({
    size: "",
    speed: ""
  });

  const fieldChangeHandler = e => {
    let { name, value } = e.target;
    // if (value > 20) value = 20;
    // if (value < 5) value = 5;
    setFields(fields => ({
      ...fields,
      [name]: value
    }));
  };

  const onSubmit = e => {
    e.preventDefault();

    if (fields.size < 5) {
      alert("Size must be equal or higher 5");
    } else if (fields.size > 20) {
      alert("Size must be equal or lower 20");
    } else if (!fields.speed) {
      alert("Please, choose speed");
    } else {
      startGame(fields);
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h1>FirstScreen</h1>
        <h3>SIZE</h3>

        <StyledInput
          type="number"
          name="size"
          value={fields.size}
          onChange={fieldChangeHandler}
          placeholder="Set number from 5 to 20"
        />
        <h3>SPEED</h3>
        <Row>
          <StyledRadioLabel>
            <input
              type="radio"
              name="speed"
              value={3}
              onChange={fieldChangeHandler}
            />
            <span>SLOW</span>
          </StyledRadioLabel>
          <StyledRadioLabel>
            <input
              type="radio"
              name="speed"
              value={2}
              onChange={fieldChangeHandler}
            />
            <span>MEDIUM</span>
          </StyledRadioLabel>
          <StyledRadioLabel>
            <input
              type="radio"
              name="speed"
              value={1}
              onChange={fieldChangeHandler}
            />
            <span>FAST</span>
          </StyledRadioLabel>
        </Row>

        <StyledBtn>START</StyledBtn>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 58px);
  padding: 40px 30px 98px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 440px;
  padding: 30px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

const Row = styled.div`
  display: flex;
  margin: 0 -10px;
`;

const StyledRadioLabel = styled.label`
  width: calc(100% / 3);
  margin: 0 10px 20px;

  input {
    display: none;
  }

  span {
    display: block;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 8px 10px;
    text-align: center;
  }

  input:checked + span {
    border-color: red;
  }
`;

const StyledInput = styled.input`
  display: block;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px 10px;
  width: 100%;
`;

const StyledBtn = styled.button`
  display: block;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px 10px;
  width: 100%;
  background-color: lightgreen;
`;
