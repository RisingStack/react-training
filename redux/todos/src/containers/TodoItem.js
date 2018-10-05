import { connect } from 'react-redux';
import { removeTodo } from '../actions';
import TodoItem from '../components/TodoItem';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch, { todo }) => ({
  removeTodo: () => dispatch(removeTodo(todo.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
