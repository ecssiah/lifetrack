import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFocuses } from './actions/selection-actions'
import HeaderContainer from './containers/HeaderContainer'
import SelectionContainer from './containers/SelectionContainer'
import FocusContainer from './containers/FocusContainer'
import SettingsContainer from './containers/SettingsContainer'

class App extends Component {
  componentDidMount() {
    this.props.fetchFocuses()
  }

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

const mapDispatchToProps = dispatch => ({
  fetchFocuses: () => fetchFocuses()
})


export default connect(null, mapDispatchToProps)(App)
