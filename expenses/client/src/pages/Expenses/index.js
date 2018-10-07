import { connect } from 'react-redux'
import loadable from 'react-loadable'
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

export default loadable({
  // prefetch does not work in cra 2 yet (needs webpack 4.6+)
  async loader() {
    const {
      default: Expenses
    } = await import(/* webpackPrefetch: true */ './Expenses')

    return connect(
      mapState,
      mapDispatch
    )(Expenses)
  },
  loading: () => null
})
