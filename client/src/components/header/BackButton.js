import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const BackButton = props => {
  return (
    <React.Fragment>
      <NavLink to='/'>
        <Button>&lt;</Button>
      </NavLink>
    </React.Fragment>
  )
}

export default BackButton
