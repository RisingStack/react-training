export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let todoId = 0;

export function addTodo(values) {
  return { type: ADD_TODO, values, id: todoId++ };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}
