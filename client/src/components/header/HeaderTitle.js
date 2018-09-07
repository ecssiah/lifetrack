import React from 'react'
import './HeaderTitle.css'

const HeaderTitle = props => {
  return (
    <h1 className="text-center header-title">{props.name}</h1>
  )
}

export default HeaderTitle
