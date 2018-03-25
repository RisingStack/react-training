import React from 'react';
import { Field } from 'redux-form';

export default ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Title</label>
      <Field name="title" component="input" />
    </div>
    <div>
      <label>Description</label>
      <Field name="description" component="input" />
    </div>
    <button>Add Todo</button>
  </form>
);
