import React from 'react';
import SettingsEntry from './SettingsEntry'

const SettingsList = props => {
  const settingsMap = props.settings.map(setting => {
    return (
      <SettingsEntry 
        key={setting.id} setting={setting} 
        updateSetting={props.updateSetting} 
      />
    )
  })

  return (
    <React.Fragment>
      {settingsMap}
    </React.Fragment>
  )
}

export default SettingsList
