import React from 'react'
import styled from 'styled-components'
import UserMenus from './UserMenus'

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  > *:not(:first-child) {
    margin-left: 10px;
  }
`

export default function App() {
  return (
    <NavBar>
      <div>Home page</div>
      <UserMenus />
    </NavBar>
  )
}
