import React, { Component} from 'react'
import SettingList from '../../components/settings/SettingList'
import { connect } from 'react-redux'

class SettingsContainer extends Component {

  render() {
    return (
      <div>
        <SettingList settings={this.props.settings} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  settings: state.settings
})

export default connect(mapStateToProps)(SettingsContainer)
