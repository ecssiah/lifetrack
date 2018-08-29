import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const AddButton = props => {
  return (
    <React.Fragment>
      <NavLink to='/'>
        <Button>+</Button>
      </NavLink>
    </React.Fragment>
  )
}

export default AddButton
