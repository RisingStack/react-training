import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Loader } from './components';
import TodosPage from './pages/Todos';
import TodoPage from './pages/Todo';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Loader color="primary" />
        <Switch>
          <Route path="/" exact component={TodosPage} />
          <Route path="/:id" component={TodoPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
