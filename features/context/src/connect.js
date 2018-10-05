import React from 'react'

const { Provider, Consumer } = React.createContext(/* deault value here */)

function connect(mapStateToProps) {
  return Comp => {
    return function HOC(props) {
      return (
        <Consumer>
          {state => <Comp {...mapStateToProps(state)} {...props} />}
        </Consumer>
      )
    }
  }
}

export { Provider, connect }
