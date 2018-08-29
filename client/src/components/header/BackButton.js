import React from 'react'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const BackButton = props => {
  return (
    <React.Fragment>
      <NavLink to='/'>
        <Image src='/back-button.png'/>
      </NavLink>
    </React.Fragment>
  )
}

export default BackButton
