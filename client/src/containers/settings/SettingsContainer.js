import React, { Component} from 'react'
import SettingList from '../../components/settings/SettingList'
import { connect } from 'react-redux'
import { getSettings } from '../../actions/settings-actions'

class SettingsContainer extends Component {

  componentDidMount() {
    if (this.props.settings.length === 0) {
      this.props.getSettings()
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
  getSettings: () => dispatch(getSettings()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
