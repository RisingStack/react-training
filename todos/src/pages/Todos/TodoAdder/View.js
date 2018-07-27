import React from 'react';
import { Field } from 'redux-form';
import { CustomField } from '../../../components';
import styled from 'styled-components';

const StyledAdder = styled.form`
  label {
    font-weight: bold;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid gray;
    background-color: inherit;
  }

  button {
    border: none;
    outline: none;
    background-color: blue;
    border-radius: 3px;
    color: white;
    padding: 10px 20px;

    &:hover {
      background-color: cyan;
    }
  }
`;

const required = value => (value ? undefined : 'The field is required');
const min3 = value =>
  3 <= value.length ? undefined : 'Must be at least 3 characters long';

export default function TodoAdder({ handleSubmit }) {
  return (
    <StyledAdder onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <Field
          name="title"
          component={CustomField}
          type="text"
          validate={[required, min3]}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <Field
          name="description"
          component={CustomField}
          type="text"
          validate={[required]}
        />
      </div>
      <button>Add Todo</button>
    </StyledAdder>
  );
}
