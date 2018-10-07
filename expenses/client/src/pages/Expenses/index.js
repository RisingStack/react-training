import { connect } from 'react-redux'
import Expenses from './Expenses'
import { listExpenses } from '../../actions/expenses'

function mapState(state) {
  return {
    expenses: state.expenses,
    pages: state.expensePages,
    isLoading: state.isExpensesLoading
  }
}

function mapDispatch(dispatch) {
  return {
    listExpenses: params => dispatch(listExpenses(params))
  }
}

export default connect(
  mapState,
  mapDispatch
)(Expenses)
