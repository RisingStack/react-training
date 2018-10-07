import React, { Component } from 'react'
import queryString from 'query-string'
import Table from 'react-table'
import 'react-table/react-table.css'

const columns = [
  { Header: 'Title', accessor: 'title', filterable: true },
  { Header: 'Amount', accessor: 'amount' }
]

const filtered = [
  {
    id: 'title'
  }
]

export default class ExpensesPage extends Component {
  constructor(props) {
    super(props)

    const query = queryString.parse(props.location.search)
    this.startingFiltered = [
      {
        id: 'title',
        value: query.title
      }
    ]
    if (query.sortBy) {
      this.startingSorted = [
        {
          id: query.sortBy,
          desc: Number(query.order) === -1
        }
      ]
    }
    this.startingPageSize = Number(query.pageSize) || 20
    this.startingPage = Number(query.page) || 0

    props.init()
  }

  onFetchPage = ({ page, pageSize, sorted, filtered }) => {
    const { history, listExpenses } = this.props

    const query = { page, pageSize }

    const mainSort = sorted[0]
    if (mainSort) {
      query.sortBy = mainSort.id
      query.order = mainSort.desc ? -1 : 1
    }

    filtered.forEach(filter => {
      query[filter.id] = filter.value
    })

    history.replace(`?${queryString.stringify(query)}`)
    listExpenses(query)
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
    const { expenses, pages } = this.props

    return (
      <Table
        manual
        data={expenses}
        columns={columns}
        defaultPageSize={this.startingPageSize}
        defaultPage={this.startingPage}
        defaultFiltered={this.startingFiltered}
        defaultSorted={this.startingSorted}
        pages={pages}
        onFetchData={this.onFetchPage}
        getTrProps={this.trProps}
      />
    )
  }
}
