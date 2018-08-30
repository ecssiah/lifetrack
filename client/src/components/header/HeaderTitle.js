import React from 'react'
import './styles.css'

const HeaderTitle = props => {
  return (
    <h1 className="title text-center">{props.name}</h1>
  )
}

export default HeaderTitle
