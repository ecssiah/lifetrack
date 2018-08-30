import React, { Component} from 'react'
import { Route } from 'react-router-dom'
import Focus from '../../components/focus/Focus'

class FocusContainer extends Component {
  render() {
    return (
      <div>
        <Route path='/:focusId' component={Focus} />
      </div>
    )
  }
}

export default FocusContainer

