import React from 'react';

const FocusEntry = props => {
  return (
    <React.Fragment>
      <span>
        {props.focus.name}
      </span>
      <br/>
    </React.Fragment>
  )
}

export default FocusEntry
