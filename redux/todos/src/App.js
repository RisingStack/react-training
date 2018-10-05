import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import TodoAdder from './containers/TodoAdder';
import TodoList from './containers/TodoList';

const App = ({ isLoading }) => (
  <Fragment>
    {isLoading && 'Loading!'}
    <TodoAdder />
    <TodoList />
  </Fragment>
);

const mapStateToProps = state => ({ isLoading: state.isLoading });
export default connect(mapStateToProps)(App);
