import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateFocus } from './actions/focus-actions'
import { changeLocation } from './actions/header-actions'
import HeaderContainer from './containers/header/HeaderContainer'
import SelectionContainer from './containers/selection/SelectionContainer'
import FocusContainer from './containers/focus/FocusContainer'
import SettingsContainer from './containers/settings/SettingsContainer'

class App extends Component {

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

      this.props.updateFocus(curFocus)
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
  selection: state.selection,
})

const mapDispatchToProps = dispatch => ({
  updateFocus: focus => dispatch(updateFocus(focus)),
  changeLocation: location => dispatch(changeLocation(location)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
