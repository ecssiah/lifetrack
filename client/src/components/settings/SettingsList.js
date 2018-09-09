import React from 'react';
import SettingsEntry from './SettingsEntry'

const SettingsList = props => {
  const settingsMap = props.settings.map(setting => 
    <SettingsEntry 
      key={setting.id} setting={setting} 
      handleSettingUpdate={props.handleSettingUpdate} 
    />
  )

  return (
    <React.Fragment>
      {settingsMap}
    </React.Fragment>
  )
}

export default SettingsList
