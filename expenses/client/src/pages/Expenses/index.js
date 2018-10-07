import { connect } from 'react-redux'
import Expenses from './Expenses'
import { listExpenses } from '../../actions/expenses'

function mapState(state) {
  return {
    expenses: state.expenses,
    pages: state.expensesPages,
    isLoading: state.isExpensesLoading
  }
}

function mapDispatch(dispatch) {
  return {
    listExpenses: query => dispatch(listExpenses(query))
  }
}

export default connect(
  mapState,
  mapDispatch
)(Expenses)
