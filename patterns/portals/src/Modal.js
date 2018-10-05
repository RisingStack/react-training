import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const StyledModal = styled.div`
  position: fixed;
  width: 300px;
  top: 50%;
  left: 50%;
  border: solid black 2px;
  transform: translate(-50%, -50%);
`

export default function Modal({ children, open }) {
  return open
    ? ReactDOM.createPortal(
        <StyledModal>
          <h2>This is a modal!</h2>
          <div>{children}</div>
        </StyledModal>,
        document.getElementById('modal')
      )
    : null
}
