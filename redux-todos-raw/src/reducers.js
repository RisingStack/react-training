import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ADD_TODO, REMOVE_TODO } from './actions';

export default (state = {}, action) => ({
  todos: todos(state.todos, action),
  todoForm: formReducer(state.todoForm, action)
});

function todos(state = [], { type, values, id }) {
  switch (type) {
    case ADD_TODO:
      return state.concat(Object.assign({}, values, { id }));
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== id);
    default:
      return state;
  }
}

function formReducer(state = {}, { type, key, value }) {
  switch (type) {
    case SET_FIELD:
      return Object.assign({}, state, { key: value });
    default:
      return state;
  }
}
