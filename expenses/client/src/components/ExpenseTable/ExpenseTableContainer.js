import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'

import ExpenseTable from './ExpenseTable'
import { getExpensesAction } from '../../actions/getExpenses'

const selector = formValueSelector('searchBar')

function mapStateToProps(state) {
  return {
    expenses: state.expenses.data,
    error: state.expenses.error,
    search: selector(state, 'search')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doGetExpenses: () => dispatch(getExpensesAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: 'searchBar'
})(ExpenseTable)
)
