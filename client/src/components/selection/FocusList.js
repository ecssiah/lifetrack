import React from 'react';
import FocusEntry from './FocusEntry'

const FocusList = props => {
  const focusMap = props.focuses.map(focus => {
    return <FocusEntry key={focus.id} focus={focus} />
  })

  return (
    <React.Fragment>
      {focusMap}
    </React.Fragment>
  )
}

export default FocusList
