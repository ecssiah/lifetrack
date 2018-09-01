import React, { Component} from 'react'
import SettingList from '../../components/settings/SettingList'
import { connect } from 'react-redux'
import { fetchSettings } from '../../actions/settings-actions'

class SettingsContainer extends Component {

  componentDidMount() {
    if (this.props.settings.length === 0) {
      this.props.fetchSettings()
    }
  }

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

const mapDispatchToProps = dispatch => ({
  fetchSettings: () => dispatch(fetchSettings())
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
