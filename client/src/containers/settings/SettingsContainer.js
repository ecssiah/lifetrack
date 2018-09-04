import React, { Component} from 'react'
import { updateSetting } from '../../actions/settings-actions'
import SettingList from '../../components/settings/SettingList'
import { connect } from 'react-redux'

class SettingsContainer extends Component {

  render() {
    return (
      <div>
        <SettingList 
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
