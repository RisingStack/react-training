export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment(by) {
  return { type: INCREMENT, by };
}

export function decrement(by) {
  return { type: DECREMENT, by };
}
