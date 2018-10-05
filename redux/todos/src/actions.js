export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const LOAD = 'LOAD';

let todoId = 0;

export function saveTodo(values) {
  return async dispatch => {
    dispatch(load(true));
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(addTodo(values));
    dispatch(load(false));
  };
}

export function addTodo(values) {
  return { type: ADD_TODO, values, id: todoId++ };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}

export function load(isLoading) {
  return { type: LOAD, isLoading };
}
