import { Component } from 'react'
import { observe, unobserve } from '@nx-js/observer-util'

export function view(Comp) {
  return class ReactiveHOC extends Comp {
    state = {}

    constructor(props, context) {
      super(props, context)

      this.render = observe(this.render, {
        scheduler: () => this.setState({}),
        lazy: true
      })
    }

    render() {
      return super.render()
    }

    componentWillUnmount() {
      unobserve(this.render)
    }
  }
}

export { observable as store } from '@nx-js/observer-util'
