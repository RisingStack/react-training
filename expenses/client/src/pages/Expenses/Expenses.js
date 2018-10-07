import React, { Component } from 'react'
import Table from 'react-table'
import 'react-table/react-table.css'

const columns = [
  { Header: 'Title', accessor: 'title' },
  { Header: 'Amount', accessor: 'amount' },
  { Header: 'Currency', accessor: 'currency' }
]

export default class ExpensesPage extends Component {
  onFetchPage = ({ page, pageSize, sorted, filtered }) => {
    this.props.listExpenses({ page, pageSize })
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
