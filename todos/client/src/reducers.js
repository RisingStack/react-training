import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  START_LOADING,
  STOP_LOADING,
  GET_TODOS_SUCCESS,
  GET_TODO_SUCCESS,
  ADD_TODO_SUCCESS,
  ERROR
} from './actions';

const customFormReducer = formReducer.plugin({
  newTodo(state, { type }) {
    switch (type) {
      case ADD_TODO_SUCCESS:
        return undefined;
      default:
        return state;
    }
  }
});

// { todos: [], todo: { title: '', description: '' }, loading: false, form: { newTodo: { title: '', description: ''}} }
export default combineReducers({
  todos: todosReducer,
  todo: todoReducer,
  isLoading: loaderReducer,
  form: customFormReducer
});

function todosReducer(state = [], { type, todos, todo }) {
  switch (type) {
    case GET_TODOS_SUCCESS:
      return todos;
    case ADD_TODO_SUCCESS:
      return [...state, todo];
    default:
      return state;
  }
}

function todoReducer(state = {}, { type, todo }) {
  switch (type) {
    case GET_TODO_SUCCESS:
      return todo;
    default:
      return state;
  }
}

function loaderReducer(state = false, { type }) {
  switch (type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
}
