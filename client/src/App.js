import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HeaderContainer from './containers/HeaderContainer'
import SelectionContainer from './containers/SelectionContainer'
import FocusContainer from './containers/FocusContainer'
import SettingsContainer from './containers/SettingsContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderContainer />
          <hr />
          <Route exact path='/' component={SelectionContainer} />
          <Route path='/focuses' component={FocusContainer} />
          <Route exact path='/settings' component={SettingsContainer} />
        </div>
      </Router>
    )
  }
}

export default App
