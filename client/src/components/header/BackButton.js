import React from 'react'
import { NavLink } from 'react-router-dom'

const BackButton = props => {
  return (
    <React.Fragment>
      <NavLink to='/'>
        <button>&lt;</button>
      </NavLink>
    </React.Fragment>
  )
}

export default BackButton
