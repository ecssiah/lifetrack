import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const SettingsButton = props => {
  return (
    <React.Fragment>
      <NavLink to='/settings'>
        <Button>*</Button>
      </NavLink>
    </React.Fragment>
  )
}

export default SettingsButton
