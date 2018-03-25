import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ADD_TODO, REMOVE_TODO, LOAD } from './actions';

export default combineReducers({
  todos,
  isLoading,
  form: formReducer
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

function isLoading(state = false, { type, isLoading }) {
  switch (type) {
    case LOAD:
      return isLoading;
    default:
      return state;
  }
}
