import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
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
    this.props.changeLocation(this.props.location.pathname)
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

const mapDispatchToProps = dispatch => ({
  changeLocation: location => dispatch(changeLocation(location))
})

export default withRouter(connect(null, mapDispatchToProps)(App))
