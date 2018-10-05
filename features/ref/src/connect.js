import React from 'react'

const { Provider, Consumer } = React.createContext(/* deault value here */)

function connect(mapStateToProps) {
  return Comp => {
    return React.forwardRef((props, ref) => {
      return (
        <Consumer>
          {state => <Comp ref={ref} {...mapStateToProps(state)} {...props} />}
        </Consumer>
      )
    })
  }
}

export { Provider, connect }
