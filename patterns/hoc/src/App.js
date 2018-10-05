import React, { Component } from 'react'
import { store, view } from './view'

const appStore = store({
  users: []
})

class App extends Component {
  addUser = ev => {
    if (ev.key === 'Enter') {
      appStore.users.push(ev.target.value)
      ev.target.value = ''
    }
  }

  render() {
    return (
      <div>
        Add user: <input onKeyPress={this.addUser} />
        <ul>
          {appStore.users.map(user => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default view(App)
