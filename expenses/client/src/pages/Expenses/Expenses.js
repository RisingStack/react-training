import React, { Component } from 'react'

export default class ExpensesPage extends Component {
  componentDidMount() {
    this.props.listExpenses()
  }

  render() {
    const { expenses } = this.props

    return <div>{JSON.stringify(expenses)}</div>
  }
}
