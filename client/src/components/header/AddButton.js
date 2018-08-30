import React from 'react'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const AddButton = props => {
  return (
    <NavLink to='/'>
      <Image src='/add-button.svg' />
    </NavLink>
  )
}

export default AddButton
