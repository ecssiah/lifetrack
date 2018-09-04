import React from 'react';
import SettingEntry from './SettingEntry'

const SettingList = props => {
  const settingsMap = Object.keys(props.settings).map((key, index) => {
    return <SettingEntry key={key} name={key} value={props.settings[key]} />
  })

  return (
    <React.Fragment>
      {settingsMap}
    </React.Fragment>
  )
}

export default SettingList
