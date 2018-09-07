import React, { Component} from 'react'
import { updateSetting } from '../../actions/settings-actions'
import SettingsList from '../../components/settings/SettingsList'
import { connect } from 'react-redux'

class SettingsContainer extends Component {

  render() {
    return (
      <div>
        <SettingsList 
          settings={this.props.settings} 
          updateSetting={this.props.updateSetting} 
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  settings: state.settings
})

const mapDispatchToProps = dispatch => ({
  updateSetting: (setting, value) => dispatch(updateSetting(setting, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
