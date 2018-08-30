import React from 'react'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const BackButton = props => {
  return (
    <NavLink to='/'>
      <Image src='/back-button.svg'/>
    </NavLink>
  )
}

export default BackButton
