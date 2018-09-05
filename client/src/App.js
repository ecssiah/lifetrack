import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setTime, updateFocus } from './actions/focus-actions'
import { getFocuses } from './actions/selection-actions'
import { getSettings } from './actions/settings-actions'
import { changeLocation } from './actions/header-actions'
import HeaderContainer from './containers/header/HeaderContainer'
import SelectionContainer from './containers/selection/SelectionContainer'
import FocusContainer from './containers/focus/FocusContainer'
import SettingsContainer from './containers/settings/SettingsContainer'

class App extends Component {

  componentDidMount() {
    this.props.getFocuses()
    this.props.getSettings()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.onRouteChanged()
    }
  }

  onRouteChanged() {
    const path = this.props.location.pathname

    this.props.changeLocation(path)

    if (path.includes('focuses')) {
      const curFocusId = parseInt(path.split('/')[2], 10)

      const curFocus = this.props.selection.find(focus => {
        return focus.id === curFocusId
      })

      const workPeriodSetting = this.props.settings.find(setting => {
        return setting.name === "Work Period"
      }) 

      const goalSetting = this.props.settings.find(setting => {
        return setting.name === "Goal"
      }) 

      curFocus.goal = goalSetting.value

      this.props.updateFocus(curFocus)
      this.props.setTime(workPeriodSetting.value)
    }
  }

  render() {
    return (
      <React.Fragment>
        <HeaderContainer />
        <br />
        <Route exact path='/' component={SelectionContainer} />
        <Route path='/focuses' component={FocusContainer} />
        <Route exact path='/settings' component={SettingsContainer} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  focus: state.focus,
  selection: state.selection,
  settings: state.settings,
})

const mapDispatchToProps = dispatch => ({
  setTime: time => dispatch(setTime(time)),
  getFocuses: () => dispatch(getFocuses()),
  getSettings: () => dispatch(getSettings()),
  updateFocus: focus => dispatch(updateFocus(focus)),
  changeLocation: location => dispatch(changeLocation(location)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
