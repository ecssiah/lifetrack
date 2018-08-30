import React from 'react'

const Focus = props => (
  <React.Fragment>
    <p>{props.focus.name}</p>
    <p>{props.focus.level}</p>
    <p>{props.focus.experience}</p>
  </React.Fragment>
)

export default Focus

