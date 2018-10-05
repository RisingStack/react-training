import axios from 'axios';
import store from './store';
import { startLoading, stopLoading } from './actions';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use(config => {
  store.dispatch(startLoading());
  return config;
});

api.interceptors.response.use(
  resp => {
    store.dispatch(stopLoading());
    return resp;
  },
  err => {
    store.dispatch(stopLoading());
    return Promise.reject(err);
  }
);

export async function getTodos() {
  const { data } = await api.get('/todos');
  return data;
}

export async function getTodo(id) {
  const { data } = await api.get(`/todos/${id}`);
  return data;
}

export async function addTodo(todo) {
  const { data } = await api.post('/todos', todo);
  return data;
}

export async function removeTodo(id) {
  const { data } = await api.delete(`/todos/${id}`);
  return data;
}
