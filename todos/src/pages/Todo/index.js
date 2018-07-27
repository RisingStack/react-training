import { connect } from 'react-redux';
import { getTodo } from '../../actions';
import View from './View';

function mapState(state) {
  return {
    todo: state.todo
  };
}

function mapDispatch(dispatch) {
  return {
    getTodo: id => dispatch(getTodo(id))
  };
}

export default connect(
  mapState,
  mapDispatch
)(View);
