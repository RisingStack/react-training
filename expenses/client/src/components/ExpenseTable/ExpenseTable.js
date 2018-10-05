import React, { Component } from 'react'
import ReactTable from 'react-table'
import { Field } from 'redux-form'

import 'react-table/react-table.css'
import './ExpenseTable.css'

class ExpenseTable extends Component {
  componentDidMount() {
    this.props.doGetExpenses()
  }

  render() {
    const { expenses, search } = this.props
    const filteredExpenses = expenses && expenses.filter(el => el.title.toLowerCase().indexOf(search && search.toLowerCase()) > -1)
    
    const columns = [
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Desciption',
        accessor: 'description'
      },
      {
        Header: 'Amount',
        accessor: 'amount'
      }
    ]

    return (
      <div>
        <div className='search-bar-div'>
        <Field
              component="input"
              name="search"
              type="text"
              placeholder="Search title..."
              className="search-input-style"
            />
            </div>
      <div className="expense-table">
        {expenses.length && (
          <ReactTable data={search ? filteredExpenses : expenses} columns={columns} defaultPageSize={20} />
        )}
      </div>
      </div>
    )
  }
}

export default ExpenseTable
