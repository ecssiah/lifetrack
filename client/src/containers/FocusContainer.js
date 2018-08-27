import React, { Component} from 'react'
import { Route, Link } from 'react-router-dom'
import Focus from '../components/focus/Focus'

class FocusContainer extends React.Component {
  render() {
    return (
      <div>
        <Route path='/:focusId' component={Focus} />
      </div>
    )
  }
}

export default FocusContainer

