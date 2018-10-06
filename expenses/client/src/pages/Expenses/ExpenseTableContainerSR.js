import { connect } from 'react-redux'

import ExpenseTableSR from './ExpenseTableSR'
import { getExpensesActionSR } from '../../actions/getExpensesSR'

function mapStateToProps(state) {
  return {
    expenses: state.expensesSR.data,
    error: state.expensesSR.error,
    isLoading: state.expensesSR.isLoading,
    pageSize: state.expensesSR.limit,
    count: state.expensesSR.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doGetExpensesSR: params => dispatch(getExpensesActionSR(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseTableSR)
