import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import HeaderContainer from './containers/HeaderContainer'
import SelectionContainer from './containers/SelectionContainer'
import FocusContainer from './containers/FocusContainer'
import SettingsContainer from './containers/SettingsContainer'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderContainer />

          <hr />

          <Route exact path='/' component={SelectionContainer} />
          <Route path='/' component={FocusContainer} />
          <Route path='/settings' component={SettingsContainer} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(App)
