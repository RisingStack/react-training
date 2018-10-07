import { connect } from 'react-redux'
import Expense from './Expense'
import { getExpense } from '../../actions/expenses'

function mapState(state) {
  return {
    expense: state.expense
  }
}

function mapDispatch(dispatch) {
  return {
    getExpense: id => dispatch(getExpense(id))
  }
}

export default connect(
  mapState,
  mapDispatch
)(Expense)
