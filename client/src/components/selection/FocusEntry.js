import React from 'react';
import { ProgressBar } from 'react-bootstrap'

const FocusEntry = props => {
  return (
    <React.Fragment>
      <span>
        {props.focus.name}
        {` Lvl: ${props.focus.level}`}
        <ProgressBar now={props.focus.experience} />
      </span>
      <br/>
    </React.Fragment>
  )
}

export default FocusEntry
