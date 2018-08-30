import React, { Component} from 'react'
import { connect } from 'react-redux'
import Focus from '../../components/focus/Focus'

class FocusContainer extends Component {
  render() {
    return (
      <Focus focus={this.props.focus} />
    )
  }
}

const mapStateToProps = state => ({
  focus: state.focus,
})

export default connect(mapStateToProps)(FocusContainer)

