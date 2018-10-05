import React, { PureComponent } from 'react'
import Modal from './Modal'

export default class App extends PureComponent {
  state = {}

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen })
  toggleVisibility = () => this.setState({ isHidden: !this.state.isHidden })

  render() {
    const { isHidden, isModalOpen } = this.state

    return (
      <div>
        <h1>App</h1>
        <button onClick={this.toggleModal}>Toggle modal</button>
        <button onClick={this.toggleVisibility}>Toggle visibility</button>
        <div hidden={isHidden}>
          <h3>Tab with modal</h3>
          <Modal open={isModalOpen}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Modal>
        </div>
      </div>
    )
  }
}
