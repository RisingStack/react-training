import * as api from './api';

export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ERROR = 'ERROR';

export function getTodos() {
  return async dispatch => {
    try {
      const todos = await api.getTodos();
      dispatch({ type: GET_TODOS_SUCCESS, todos });
    } catch (err) {
      dispatch({ type: ERROR, err });
    }
  };
}

export function getTodo(id) {
  return async dispatch => {
    try {
      const todo = await api.getTodo(id);
      console.log('todo', todo, id);
      dispatch({ type: GET_TODO_SUCCESS, todo });
    } catch (err) {
      dispatch({ type: ERROR, err });
    }
  };
}

export function addTodo(data) {
  return async dispatch => {
    try {
      const todo = await api.addTodo(data);
      dispatch({ type: ADD_TODO_SUCCESS, todo });
    } catch (err) {
      dispatch({ type: ERROR, err });
    }
  };
}

export function startLoading() {
  return { type: START_LOADING };
}

export function stopLoading() {
  return { type: STOP_LOADING };
}
