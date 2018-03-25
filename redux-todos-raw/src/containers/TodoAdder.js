import TodoAdder from '../components/TodoAdder';
import { addTodo } from '../actions';

export default reduxForm({
  form: 'todoAdder',
  onSubmit: (values, dispatch) => dispatch(addTodo(values))
})(TodoAdder);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});
