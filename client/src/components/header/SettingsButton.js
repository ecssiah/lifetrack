import React from 'react'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const SettingsButton = props => {
  return (
    <NavLink to='/settings'>
      <Image src='/settings-button.svg'/>
    </NavLink>
  )
}

export default SettingsButton
