import { connect } from 'react-redux';
import { getTodos } from '../../../actions';
import View from './View';

function mapState(state) {
  return {
    todos: state.todos
  };
}

function mapDispatch(dispatch) {
  return {
    getTodos: () => dispatch(getTodos())
  };
}

export default connect(
  mapState,
  mapDispatch
)(View);
