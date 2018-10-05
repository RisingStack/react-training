import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({ todos: state.todos });
export default connect(mapStateToProps)(TodoList);
