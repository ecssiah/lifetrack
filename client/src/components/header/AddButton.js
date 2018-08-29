import React from 'react'
import { NavLink } from 'react-router-dom'

const AddButton = props => {
  return (
    <React.Fragment>
      <NavLink to='/'>
        <button>+</button>
      </NavLink>
    </React.Fragment>
  )
}

export default AddButton
