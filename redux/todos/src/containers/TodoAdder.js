import { reduxForm } from 'redux-form';
import TodoAdder from '../components/TodoAdder';
import { saveTodo } from '../actions';

export default reduxForm({
  form: 'todoAdder',
  onSubmit: (values, dispatch) => dispatch(saveTodo(values))
})(TodoAdder);
