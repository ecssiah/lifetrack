import React, { Component} from 'react'
import FocusList from '../components/selection/FocusList'
import { connect } from 'react-redux'
import { fetchFocuses } from '../actions/selection-actions'

class SelectionContainer extends React.Component {
  componentDidMount() {
    this.props.fetchFocuses()
  }

  render() {
    return (
      <div>
        <FocusList focuses={this.props.focuses} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  focuses: state.selection
})

const mapDispatchToProps = dispatch => ({
  fetchFocuses: () => dispatch(fetchFocuses())
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectionContainer)
