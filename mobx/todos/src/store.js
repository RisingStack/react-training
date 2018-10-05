import { observable, decorate, action, runInAction, flow } from 'mobx';

let todosId = 0;

class Store {
  todos = [];
  isLoading = false;
  saveTodo = flow(function*(values) {
    this.isLoading = true;
    yield new Promise(resolve => setTimeout(resolve, 1000));
    this.isLoading = false;
    this.addTodo(values);
  });
  addTodo(values) {
    this.todos.push(Object.assign(values, { id: todosId++ }));
  }
  removeTodo(todo) {
    this.todos.remove(todo);
  }
}

decorate(Store, {
  todos: observable,
  isLoading: observable,
  addTodo: action.bound,
  removeTodo: action.bound
});

export default new Store();
