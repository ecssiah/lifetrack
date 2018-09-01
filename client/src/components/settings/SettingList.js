import React from 'react';
import SettingEntry from './SettingEntry'

const SettingList = props => {
  const settingsMap = props.settings.map(setting => {
    return <SettingEntry key={setting.id} setting={setting} />
  })

  return (
    <React.Fragment>
      {settingsMap}
    </React.Fragment>
  )
}

export default SettingList
