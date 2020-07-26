import React, { useState, Component } from 'react'
import { Container } from 'reactstrap'
import { NavMenu } from './NavMenu'
// import { NavBar } from './index.jsx'

export function Layout(props) {
  const [activeSearch, setActiveSearch] = useState('')
  return (
    <div>
      <NavMenu activeSearch={activeSearch} setActiveSearch={setActiveSearch} />
      <Container>{props.children}</Container>
    </div>
  )
}
