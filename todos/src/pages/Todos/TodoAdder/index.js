import { reduxForm } from 'redux-form';
import View from './View';
import { addTodo } from '../../../actions';

export default reduxForm({
  form: 'newTodo',
  onSubmit: (todo, dispatch) => dispatch(addTodo(todo))
})(View);
