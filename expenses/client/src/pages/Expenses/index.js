import { connect } from 'react-redux'
import Expenses from './Expenses'
import { listExpenses, initExpenses } from '../../actions/expenses'

function mapState(state) {
  return {
    expenses: state.expenses,
    pages: state.expensesPages
  }
}

function mapDispatch(dispatch) {
  return {
    listExpenses: query => dispatch(listExpenses(query)),
    init: () => dispatch(initExpenses())
  }
}

export default connect(
  mapState,
  mapDispatch
)(Expenses)
