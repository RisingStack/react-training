import React, { Component } from 'react'
import Table from 'react-table'
import 'react-table/react-table.css'

const columns = [
  { Header: 'Title', accessor: 'title', filterable: true },
  { Header: 'Amount', accessor: 'amount' }
]

export default class ExpensesPage extends Component {
  onFetchPage = ({ page, pageSize, sorted, filtered }) => {
    const query = { page, pageSize }

    const mainSort = sorted[0]
    if (mainSort) {
      query.sortBy = mainSort.id
      query.order = mainSort.desc ? -1 : 1
    }

    filtered.forEach(filter => {
      query[filter.id] = filter.value
    })

    this.props.listExpenses(query)
  }

  trProps = (state, row) => {
    const { history } = this.props

    return {
      onClick() {
        history.push(`/expenses/${row.original._id}`)
      }
    }
  }

  render() {
    const { expenses, pages, isLoading } = this.props

    return (
      <Table
        manual
        data={expenses}
        columns={columns}
        pageSize={20}
        pages={pages}
        loading={isLoading}
        onFetchData={this.onFetchPage}
        getTrProps={this.trProps}
      />
    )
  }
}
