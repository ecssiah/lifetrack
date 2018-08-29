import React from 'react'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const SettingsButton = props => {
  return (
    <React.Fragment>
      <NavLink to='/settings'>
        <Image src='/settings-button.png'/>
      </NavLink>
    </React.Fragment>
  )
}

export default SettingsButton
