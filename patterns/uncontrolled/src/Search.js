import React, { Component } from 'react'

export default class Search extends Component {
  nameRef = React.createRef()

  onSearch = ev => {
    const { onSearch } = this.props

    if (ev.key === 'Enter') {
      onSearch(ev.target.value)
    } else if (ev.key === 'Escape') {
      onSearch('')
      ev.target.value = ''
    }
  }

  onClear = () => {
    const { onSearch } = this.props

    const target = this.nameRef.current
    if (target) {
      target.value = ''
    }
    onSearch('')
  }

  render() {
    const { onSearch, ...props } = this.props

    return (
      <div>
        <input {...props} onKeyUp={this.onSearch} ref={this.nameRef} />
        <button onClick={this.onClear}>X</button>
      </div>
    )
  }
}
