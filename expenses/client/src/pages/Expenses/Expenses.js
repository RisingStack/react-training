import React, { Component } from 'react'
import Table from 'react-table'
import 'react-table/react-table.css'

const columns = [
  { Header: 'Title', accessor: 'title' },
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

    this.props.listExpenses(query)
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
      />
    )
  }
}
