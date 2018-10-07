import React, { Component } from 'react'

export default class ExpensePage extends Component {
  componentDidMount() {
    const { getExpense, match } = this.props
    getExpense(match.params.id)
  }

  render() {
    const { expense } = this.props

    if (!expense) {
      return null
    }

    return (
      <div>
        <h3>
          {expense.title}: {expense.amount}$
        </h3>
        {expense.description && <p>{expense.description}</p>}
        {expense.img && <img src={expense.img} alt={expense.title} />}
      </div>
    )
  }
}
