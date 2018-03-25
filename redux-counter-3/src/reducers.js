import { INCREMENT, DECREMENT } from './actions';

export default function counter(state, { by, type }) {
  switch (type) {
    case INCREMENT:
      return state + by;
    case DECREMENT:
      return state - by;
    default:
      return state;
  }
}
