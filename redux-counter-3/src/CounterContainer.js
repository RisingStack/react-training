import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';
import Counter from './Counter';

function mapStateToProps(state) {
  return { value: state };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment(2)),
    decrement: () => dispatch(decrement(3))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
