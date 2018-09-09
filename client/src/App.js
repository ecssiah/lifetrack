import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setTime, updateFocus } from './actions/focus-actions'
import { changeLocation } from './actions/header-actions'
import { getSelection } from './actions/selection-actions'
import { getSettings } from './actions/settings-actions'
import FocusContainer from './containers/focus/FocusContainer'
import HeaderContainer from './containers/header/HeaderContainer'
import SelectionContainer from './containers/selection/SelectionContainer'
import SettingsContainer from './containers/settings/SettingsContainer'

class App extends Component {

  componentDidMount() {
    this.props.getSettings()
    this.props.getSelection()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.onRouteChanged()
    }
  }

  onRouteChanged() {
    const path = this.props.location.pathname

    this.props.changeLocation(path)

    if (path === '/') {
      setTimeout(this.props.getSelection, 500) 
    } else if (path.includes('focuses')) {
      this.handleFocusRoute(path)
    }
  }

  handleFocusRoute(path) {
    const curFocusId = parseInt(path.split('/')[2], 10)
    const curFocus = this.props.selection.find(focus =>
      focus.id === curFocusId
    )

    if (curFocus.time === 0) { 
      const workPeriod = this.props.settings.find(setting =>
        setting.name === "Work Period"
      ) 
      curFocus.time = workPeriod.value 
    }

    this.props.updateFocus(curFocus)
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
  getSelection: () => dispatch(getSelection()),
  getSettings: () => dispatch(getSettings()),
  setTime: time => dispatch(setTime(time)),
  updateFocus: focus => dispatch(updateFocus(focus)),
  changeLocation: location => dispatch(changeLocation(location)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
)
