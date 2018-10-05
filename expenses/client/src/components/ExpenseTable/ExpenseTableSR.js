import React, { Component } from 'react'
import ReactTable from 'react-table'

import 'react-table/react-table.css'
import './ExpenseTable.css'

class ExpenseTableSR extends Component {

  fetchData = (state, instance) => {
    const params = {}
    console.log(state)
    if (state.filtered.length) {
      params.title = state.filtered[0].value
    }
    if (state.sorted.length) {
      params.sort = state.sorted[0].desc ? `-${state.sorted[0].id}` : state.sorted[0].id
    }
    params.pageSize = state.pageSize
    params.offset = state.pageSize * state.page

    this.props.doGetExpensesSR(params)
  }

  render() {
    const { expenses } = this.props

    const columns = [
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Desciption',
        accessor: 'description',
        filterable: false
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        filterable: false
      }
    ]

    return (
      <div>
        <div className="expense-table">
          
            <ReactTable
              manual
              filterable
              pages={Math.ceil(this.props.count / this.props.pageSize )}
              loading={this.props.isLoading}
              data={expenses.length ? expenses : []}
              columns={columns}
              onFetchData={this.fetchData}
              defaultPageSize={10}
            />
          
        </div>
      </div>
    )
  }
}

export default ExpenseTableSR
