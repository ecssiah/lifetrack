import React, { Component} from 'react'
import { connect } from 'react-redux'
import { saveFocus } from '../../actions/focus-actions'
import { updateSetting } from '../../actions/settings-actions'
import SettingsList from '../../components/settings/SettingsList'

class SettingsContainer extends Component {

  handleSettingUpdate = (setting, value) => {
    this.props.updateSetting(setting, value) 

    if (setting.name === "Work Period") {
      this.props.selection.forEach(focus => {
        focus.time = value
        this.props.saveFocus(focus)
      })
    }
  }

  render() {
    return (
      <div>
        <SettingsList 
          settings={this.props.settings} 
          handleSettingUpdate={this.handleSettingUpdate} 
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selection: state.selection,
  settings: state.settings,
})

const mapDispatchToProps = dispatch => ({
  updateSetting: (setting, value) => dispatch(updateSetting(setting, value)),
  saveFocus: focus => dispatch(saveFocus(focus)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
