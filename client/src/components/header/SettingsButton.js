import React from 'react'
import { NavLink } from 'react-router-dom'

const SettingsButton = props => {
  return (
    <React.Fragment>
      <NavLink to='/settings'>
        <button>*</button>
      </NavLink>
    </React.Fragment>
  )
}

export default SettingsButton
