import React from 'react';
import SelectionEntry from './SelectionEntry'

const SelectionList = props => {
  const focusMap = props.focuses.map(focus => {
    return (
      <SelectionEntry 
        key={focus.id} focus={focus} 
        handleDeleteClick={props.handleDeleteClick} 
      />
    )
  })

  return (
    <React.Fragment>
      {focusMap}
    </React.Fragment>
  )
}

export default SelectionList
